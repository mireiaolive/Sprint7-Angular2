import { Component, Input } from "@angular/core";
import { ResultService } from "../home/services/result.service";

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html",
    styleUrls: ["./list.component.css"],
})
export class ListComponent {
    constructor(private resultService: ResultService) {}
    @Input() pressupostos: any[] = [];

    pressupostosFiltrats: any[] = [];
    ordreAlfabetic: boolean = false;
    ordreData: boolean = false;

    ordenarAlfabeticament() {
        this.pressupostos.sort((a, b) => a.nom.localeCompare(b.nom));
        this.ordreAlfabetic = true;
        this.ordreData = false;
    }

    ordenarPerData() {
        this.pressupostos.sort(
            (a, b) => new Date(a.data).getTime() - new Date(b.data).getTime()
        );
        this.ordreAlfabetic = false;
        this.ordreData = true;
    }

    reinicialitzarOrdre() {
        this.pressupostos = this.resultService.getPressupostos();
        this.ordreAlfabetic = false;
        this.ordreData = false;
    }
}
