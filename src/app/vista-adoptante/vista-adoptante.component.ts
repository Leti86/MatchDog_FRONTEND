import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';
import { Perro } from '../servicios/perros.service';

@Component({
  selector: 'app-vista-adoptante',
  templateUrl: './vista-adoptante.component.html',
  styleUrls: ['./vista-adoptante.component.css']
})
export class VistaAdoptanteComponent implements OnInit {
  // formEdicionAdoptante: FormGroup;
  datosAdoptante: Adoptante;
  datosPerros: Perro[];


  constructor(
    private adoptantesService: AdoptantesService
  ) {

    this.datosPerros = [];




    // this.formEdicionAdoptante = new FormGroup({
    //   nombre: new FormControl('',
    //     Validators.required),
    //   apellidos: new FormControl('',
    //     Validators.required),
    //   direccion: new FormControl('',
    //     Validators.required),
    //   localidad: new FormControl('',
    //     Validators.required),
    //   provincia: new FormControl('',
    //     Validators.required),
    //   telefono: new FormControl('', [
    //     Validators.required,
    //     Validators.min(0),
    //     Validators.minLength(9),
    //     this.numberValidator]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    //   ]),
    //   tiene_gato: new FormControl('',
    //     Validators.required),
    //   tipo_vivienda: new FormControl('',
    //     Validators.required),
    //   espacio_exterior: new FormControl('',
    //     Validators.required),
    //   medida_espacio_exterior: new FormControl('', [
    //     Validators.min(0),
    //     this.numberValidator]), //dato no obligatorio
    //   tipo_espacio_exterior: new FormControl(''), //dato no obligatorio
    //   fotos_casa: new FormControl('',
    //     Validators.required),
    //   password: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^(?=.*\d).{4,8}$/)])
    // })
  }

  ngOnInit(): void {

    this.adoptantesService.perfil()
      .then(response =>
        this.datosAdoptante = response)
      .catch(error => console.log(error));

    //console.log(this.datosAdoptante);

    this.adoptantesService.getFavouriteDogs()
      .then(response =>
        this.datosPerros = response)
      .catch(error => console.log(error));
  }

  onclick(perro) {
    const IdEliminar = perro.idFavorito;
    //console.log(IdEliminar);
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
