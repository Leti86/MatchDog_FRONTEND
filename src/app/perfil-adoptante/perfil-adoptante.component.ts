import { Component, OnInit } from '@angular/core';
import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';

@Component({
  selector: 'app-perfil-adoptante',
  templateUrl: './perfil-adoptante.component.html',
  styleUrls: ['./perfil-adoptante.component.css']
})
export class PerfilAdoptanteComponent implements OnInit {

  perfilAdoptante: Adoptante;

  constructor(private adoptantesService: AdoptantesService) { }

  ngOnInit(): void {
    this.adoptantesService.perfil()
      .then(response =>
        this.perfilAdoptante = response)
      .catch(error => console.log(error));

  }

}
