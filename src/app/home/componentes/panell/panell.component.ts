import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-home-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent {
  @Output() importeComponenteHijoChange = new EventEmitter<number>();

  myForm: FormGroup;
  importe: number = 0;

  constructor(private resultService: ResultService) {
    this.myForm = new FormGroup({
      numeroPaginas: new FormControl('', Validators.required),
      numeroIdiomas: new FormControl('', Validators.required),
    });
  }

  calcularResultado() {
    if (this.myForm.valid) {
      const numeroPaginas = this.myForm.value.numeroPaginas;
      const numeroIdiomas = this.myForm.value.numeroIdiomas;

      if (numeroPaginas === '' || numeroIdiomas === '') {
        this.importe = 0;
      } else {
        this.importe = this.resultService.calcularResultado(
          numeroPaginas,
          numeroIdiomas
        );
      }
      // Emitir el importe del componente hijo al componente padre
      this.importeComponenteHijoChange.emit(this.importe);
    }
  }
  verificarVacio(controlName: string) {
    const control = this.myForm.get(controlName);

    if (control && control.value === '') {
      this.importe = 0;
      this.importeComponenteHijoChange.emit(this.importe);
    }
  }
}
