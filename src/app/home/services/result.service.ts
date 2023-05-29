import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ResultService {
    pressupostos: any[] = [];
    calcularResultado(numeroPaginas: number, numeroIdiomas: number): number {
        return numeroPaginas * numeroIdiomas * 30;
    }

    afegirPressupost(pressupost: any) {
        this.pressupostos.push(pressupost);
        console.log(this.pressupostos);
    }

    getPressupostos(): any[] {
        return this.pressupostos;
    }
}
