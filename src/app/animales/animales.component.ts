import { Component, OnInit } from '@angular/core';
import { Perro, PerrosService } from '../servicios/perros.service';
// import swal from 'sweetalert';

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  perrosFavoritos: Perro[];
  perros: Perro[];

  filtroEdad: string;
  filtroTamano: string;

  constructor(private perrosService: PerrosService) {
    this.filtroEdad = '';
    this.filtroTamano = '';
    this.perrosFavoritos = [];
  }

  ngOnInit(): void {
    this.perrosService.getAllDogs()
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
    console.log('SE EJECUTA EL NGONINIT');
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

  //este array de perros es el que tendrá cada adoptante. puede añadir perros a la lista personal.
  onClickAddFavourite(pPerro) {
    this.perrosFavoritos.push(pPerro);
    console.log(this.perrosFavoritos);
    // swal('Perro añadido a la lista', '¡Sigue explorando!', "success"); DA ERROR AL HACER EL NG SERVE, MIRAR POR QUÉ

  }



}
