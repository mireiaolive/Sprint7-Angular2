import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  calcularResultado(numeroPaginas: number, numeroIdiomas: number): number {
    return numeroPaginas * numeroIdiomas * 30;
  }
}
