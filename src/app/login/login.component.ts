import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdoptantesService } from '../servicios/adoptantes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formRegistroAdoptante: FormGroup;


  constructor(private adoptantesService: AdoptantesService) {


    this.formRegistroAdoptante = new FormGroup({
      nombre: new FormControl('',
        Validators.required),
      apellidos: new FormControl('',
        Validators.required),
      direccion: new FormControl('',
        Validators.required),
      localidad: new FormControl('',
        Validators.required),
      provincia: new FormControl('',
        Validators.required),
      telefono: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.minLength(9),
        this.numberValidator]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      tiene_gato: new FormControl('',
        Validators.required),
      tipo_vivienda: new FormControl('',
        Validators.required),
      espacio_exterior: new FormControl('',
        Validators.required),
      metros_exterior: new FormControl('',
        Validators.min(0),
      ),
      tipo_espacio_exterior: new FormControl(''),
      fotos_casa: new FormControl('',
        Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)])
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {

    this.adoptantesService.create(this.formRegistroAdoptante.value)
      .then(response => {
        console.log(response);

      })
      .catch(error => console.log(error));
    this.formRegistroAdoptante.reset();

  }



  numberValidator(control: FormControl) {
    const valor = control.value;

    if (valor === null) {
      return { numberValidator: 'el campo debe ser numérico' }
    } else {
      return null;
    }
  }




}
