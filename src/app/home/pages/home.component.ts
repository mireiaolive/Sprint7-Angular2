import { Component } from "@angular/core";
import { ResultService } from "../services/result.service";
import { Location } from "@angular/common";

@Component({
    selector: "app-home",
    templateUrl: "home.component.html",
})
export class HomeComponent {
    total: number = 0;
    primerCheckbox: boolean = false;
    mostrarInputsFlag: boolean = false;
    precioTotal: number = 0;

    pressupostos: any[] = [];
    nomPressupost: string = "";
    client: string = "";
    serveiSeleccionat: string[] = [];

    constructor(
        private resultService: ResultService,
        private location: Location
    ) {
        this.pressupostos = this.resultService.getPressupostos();
    }

    calcularTotal() {
        this.total = 0;
        this.serveiSeleccionat = [];

        const checkbox1 = document.getElementById(
            "checkbox1"
        ) as HTMLInputElement;
        const checkbox2 = document.getElementById(
            "checkbox2"
        ) as HTMLInputElement;
        const checkbox3 = document.getElementById(
            "checkbox3"
        ) as HTMLInputElement;

        if (checkbox1.checked) {
            this.total += 500;
            this.serveiSeleccionat.push("Una página web (500 €) ");
        }

        if (checkbox2.checked) {
            this.total += 300;
            this.serveiSeleccionat.push("Una campaña SEO (300 €)");
        }

        if (checkbox3.checked) {
            this.total += 200;
            this.serveiSeleccionat.push("Una campaña de Google Ads (200 €) ");
        }
    }

    actualizarPrecio(precio: number) {
        this.precioTotal = precio;
    }

    mostrarInputs() {
        this.mostrarInputsFlag = this.primerCheckbox;
    }

    goBack() {
        this.location.back();
    }

    enviarPresupuesto() {
        const pressupost = {
            nom: this.nomPressupost,
            client: this.client,
            servei: this.serveiSeleccionat,
            preu: this.total + this.precioTotal,
        };
        console.log("Pressupost:", pressupost);
        this.resultService.afegirPressupost(pressupost);

        // Reiniciar los valores de los inputs después de enviar el presupuesto
        this.nomPressupost = "";
        this.client = "";
        this.serveiSeleccionat = [];
        this.total = 0;
        this.precioTotal = 0;
    }
}
