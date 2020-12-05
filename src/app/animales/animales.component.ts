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

  //devuelve perros por edad: cachorro-adulto
  onClickEdad(pEdad: string) {
    this.filtroEdad = pEdad;

    this.perrosService.getDogsByAge(pEdad)
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
  }

  //devuelve perros por tamaño
  onClickTamano(pTamano: string) {
    this.filtroTamano = pTamano;

    this.perrosService.getDogsBySize(pTamano)
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
  }

  //devuelve perros por edad y tamaño: podemos llamarla con un condicional? Si algún boton de EDAD está pulsado, que llame a esta función; si no, que llame solo a getdogsbysize
  onClickEdadTamano(pEdad: string, pTamano: string) {
    this.perrosService.getDogsByAgeAndSize(pEdad, pTamano)
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));
  }

  onClickVerify() {
    //esta función debe verificar si el botón de la edad está pulsado o no para saber si lanzar la función de buscar solo por tamaño o la de buscar por tamaño y edad
  }



}
