import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';
import { Perro, PerrosService } from '../servicios/perros.service';


@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.css']
})
export class AnimalesComponent implements OnInit {
  perrosFavoritos: number[];
  perros: Perro[];
  infoAdoptante: Adoptante;

  botonClicado: boolean;


  filtroEdad: string;
  filtroTamano: string;



  constructor(
    private perrosService: PerrosService,
    private router: Router,
    private adoptantesService: AdoptantesService

  ) {
    this.filtroEdad = '';
    this.filtroTamano = '';
    this.perrosFavoritos = [];
    this.botonClicado = false;
  }

  ngOnInit(): void {
    this.perrosService.getAllDogs()
      .then(response => {
        this.perros = response
      })
      .catch(error => console.log(error));

    this.adoptantesService.getFavouriteDogs()
      .then(response => {
        this.perrosFavoritos = response.map((perro) => perro.id)
        console.log(this.perrosFavoritos)
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

  //este array de perros es el que tendrá cada adoptante. puede añadir perros a la lista personal.
  onClickAddFavourite(perro) {

    if (localStorage.getItem('token_adoptantes')) {
      const IdPerro = perro.id;

      this.perrosService.favoritesDogs(IdPerro)
        .then(response => {
          this.perrosFavoritos.push(IdPerro)
        })
        .catch(error => console.log(error));

      this.botonClicado = true;



    } else {
      this.router.navigate(['/identificar']);
    }






  }



}
