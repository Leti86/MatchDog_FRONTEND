import { Component, OnInit } from '@angular/core';

import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';
import { Perro } from '../servicios/perros.service';

@Component({
  selector: 'app-vista-adoptante',
  templateUrl: './vista-adoptante.component.html',
  styleUrls: ['./vista-adoptante.component.css']
})
export class VistaAdoptanteComponent implements OnInit {

  datosAdoptante: Adoptante;
  datosPerros: Perro[];


  constructor(
    private adoptantesService: AdoptantesService
  ) {

    this.datosPerros = [];

  }

  ngOnInit(): void {

    this.adoptantesService.perfil()
      .then(response =>
        this.datosAdoptante = response)
      .catch(error => console.log(error));



    this.adoptantesService.getFavouriteDogs()
      .then(response =>
        this.datosPerros = response)
      .catch(error => console.log(error));
  }

  onclick(perro) {
    const IdEliminar = perro.idFavorito;

    this.adoptantesService.eliminarPerroListaFavoritos(IdEliminar)
      .then(response =>
        console.log(response)
      )
      .catch(error => console.log(error));

    this.adoptantesService.getFavouriteDogs()
      .then(response =>
        this.datosPerros = response)
      .catch(error => console.log(error));


  }

}
