import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  filtroEdad: string;
  filtroTamano: string;
  constructor() {
    this.filtroEdad = '';
    this.filtroTamano = '';
  }

  ngOnInit(): void {
  }

  onClickEdad(pEdad: string) {
    this.filtroEdad = pEdad;
  }

  onClickTamano(pTamano: string) {
    this.filtroTamano = pTamano;
  }



}
