import { Component, EventEmitter, Output } from '@angular/core';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-home-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent {
  numeroPaginas: number = 0;
  numeroIdiomas: number = 0;

  @Output() precioActualizado: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(private resultService: ResultService) {}

  incrementarPaginas() {
    this.numeroPaginas++;
    this.actualizarPrecio();
  }

  decrementarPaginas() {
    if (this.numeroPaginas > 0) {
      this.numeroPaginas--;
      this.actualizarPrecio();
    }
  }

  incrementarIdiomas() {
    this.numeroIdiomas++;
    this.actualizarPrecio();
  }

  decrementarIdiomas() {
    if (this.numeroIdiomas > 0) {
      this.numeroIdiomas--;
      this.actualizarPrecio();
    }
  }

  private actualizarPrecio() {
    const precioTotal = this.resultService.calcularResultado(
      this.numeroPaginas,
      this.numeroIdiomas
    );
    this.precioActualizado.emit(precioTotal);
  }
}
