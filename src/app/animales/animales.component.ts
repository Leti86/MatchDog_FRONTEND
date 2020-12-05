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



}
