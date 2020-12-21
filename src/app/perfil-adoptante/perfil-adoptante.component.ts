import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';

@Component({
  selector: 'app-perfil-adoptante',
  templateUrl: './perfil-adoptante.component.html',
  styleUrls: ['./perfil-adoptante.component.css']
})
export class PerfilAdoptanteComponent implements OnInit {

  perfilAdoptante: Adoptante;
  id: number;

  constructor(
    private adoptantesService: AdoptantesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.idAdoptante;
    })
    //ahora hay que pasarle esta id a nuestra función de recuperación del perfil


    this.adoptantesService.perfilDesdeProtectora(this.id)
      .then(response =>
        this.perfilAdoptante = response)
      .catch(error => console.log(error));

  }

}
