import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-login-protectora',
  templateUrl: './login-protectora.component.html',
  styleUrls: ['./login-protectora.component.css']
})
export class LoginProtectoraComponent implements OnInit {

  formRegistroProtectoras: FormGroup;

  constructor(
    private protectoraService: ProtectoraService
  ) {
    this.formRegistroProtectoras = new FormGroup({
      nombre: new FormControl(
        '', [Validators.required]
      ),
      email: new FormControl(
        '', [
        Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
      ]),
      telefono: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(9)
      ]
      ),
      direccion: new FormControl(
        '', [Validators.required]
      ),
      localidad: new FormControl(
        '', [Validators.required]
      ),
      provincia: new FormControl(
        '', [Validators.required]
      ),
      latitud: new FormControl(
        '', [Validators.required]
      ),
      longitud: new FormControl(
        '', [Validators.required]
      ),
      necesidad_voluntarios: new FormControl(
        '', [Validators.required]
      ),
      imagen: new FormControl(
        '', [Validators.required]
      ),
      comentarios: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(20)
      ]
      )

    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.protectoraService.create(this.formRegistroProtectoras.value)
      .then(response => {
        console.log(response);

      })
      .catch(error => console.log(error));

  }

}
