import { Component, OnInit } from '@angular/core';
import { Perro, PerrosService } from '../servicios/perros.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {

  perros: Perro[];

  filtroEdad: string;
  filtroTamano: string;

  constructor(private perrosService: PerrosService) {
    this.filtroEdad = '';
    this.filtroTamano = '';
  }

  ngOnInit(): void {
    this.perrosService.getAll()
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
  }

  //devuelve perros por edad: cachorro-adulto FUNCIONA BIEN
  onClickEdad(pEdad: string) {
    this.filtroEdad = pEdad;

    if (this.filtroTamano == '') {
      this.perrosService.getDogsByAge(pEdad)
        .then(response => {
          this.perros = response
        })
        .catch(error => console.log(error));
    } else {
      this.onClickEdadTamano(pEdad, this.filtroTamano);
    }
  }

  //devuelve perros por tamaño FUNCIONA BIEN
  onClickTamano(pTamano: string) {
    this.filtroTamano = pTamano;

    if (this.filtroEdad == '') {
      this.perrosService.getDogsBySize(pTamano)
        .then(response => {
          this.perros = response
        })
        .catch(error => console.log(error));
    } else {
      this.onClickEdadTamano(this.filtroEdad, pTamano);
    }
  }

  //devuelve perros por edad y tamaño FUNCIONA BIEN
  onClickEdadTamano(pEdad: string, pTamano: string) {
    this.perrosService.getDogsByAgeAndSize(pEdad, pTamano)
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
  }





}
