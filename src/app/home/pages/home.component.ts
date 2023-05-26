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

    constructor(
        private resultService: ResultService,
        private location: Location
    ) {}

    calcularTotal() {
        this.total = 0;

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
        }

        if (checkbox2.checked) {
            this.total += 300;
        }

        if (checkbox3.checked) {
            this.total += 200;
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
}
