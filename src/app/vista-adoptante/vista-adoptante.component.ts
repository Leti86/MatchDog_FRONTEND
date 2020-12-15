import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vista-adoptante',
  templateUrl: './vista-adoptante.component.html',
  styleUrls: ['./vista-adoptante.component.css']
})
export class VistaAdoptanteComponent implements OnInit {
  // formEdicionAdoptante: FormGroup;

  constructor() {
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
  }

}
