import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logging } from 'protractor';
import { Adoptante, AdoptantesService } from '../servicios/adoptantes.service';


@Component({
  selector: 'app-formulario-edit',
  templateUrl: './formulario-edit.component.html',
  styleUrls: ['./formulario-edit.component.css']
})
export class FormularioEditComponent implements OnInit {

  formEdicionAdoptante: FormGroup;
  datosAdoptantes: Adoptante;

  constructor(
    private adoptanteService: AdoptantesService,
    private router: Router
  ) {


  }

  ngOnInit(): void {
    this.adoptanteService.perfil()
      .then(response => {
        // Recuperando usuario
        this.datosAdoptantes = response;
        // Creando formulario
        this.formEdicionAdoptante = new FormGroup({
          nombre: new FormControl(this.datosAdoptantes.nombre,
            Validators.required),
          apellidos: new FormControl(this.datosAdoptantes.apellidos,
            Validators.required),
          direccion: new FormControl(this.datosAdoptantes.direccion,
            Validators.required),
          localidad: new FormControl(this.datosAdoptantes.localidad,
            Validators.required),
          provincia: new FormControl(this.datosAdoptantes.provincia,
            Validators.required),
          telefono: new FormControl(this.datosAdoptantes.telefono, [
            Validators.required,
            Validators.min(0),
            Validators.minLength(9),
            this.numberValidator]),
          email: new FormControl(this.datosAdoptantes.email, [
            Validators.required,
            Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
          ]),
          tiene_gato: new FormControl(this.datosAdoptantes.tiene_gato,
            Validators.required),
          tipo_vivienda: new FormControl(this.datosAdoptantes.tipo_vivienda,
            Validators.required),
          espacio_exterior: new FormControl(this.datosAdoptantes.espacio_exterior,
            Validators.required),
          metros_exterior: new FormControl(this.datosAdoptantes.metros_exterior, [
            Validators.min(0),
            this.numberValidator]), //dato no obligatorio
          tipo_espacio_exterior: new FormControl(this.datosAdoptantes.metros_exterior,
            Validators.required), //dato no obligatorio
          fotos_casa: new FormControl(this.datosAdoptantes.fotos_casa,
            Validators.required),
          password: new FormControl(this.datosAdoptantes.password, [
            Validators.required,
            Validators.pattern(/^(?=.*\d).{4,8}$/)])
        })

      })

      .catch(error => console.log(error));

  }

  onSubmit() {
    this.adoptanteService.update(this.formEdicionAdoptante.value)
      //console.log('LOCALIZARLOOOOOOOOOO', this.formEdicionAdoptante.value)
      .then(response => {
        this.router.navigate(['/vistaadoptante']);
      })
      .catch(error => console.log(error));

  }


  //Validador personalizado: comprueba si se ha introducido un número (una letra la reconoce como null)
  numberValidator(control: FormControl) {
    const valor = control.value;
    // console.log(valor)
    if (valor === null) {
      return { numberValidator: 'el campo debe ser numérico' }
    } else {
      return null;
    }
  }

}
