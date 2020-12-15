import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdoptantesService } from '../servicios/adoptantes.service';
// import { IdentificacionService } from '../servicios/identificacion.service';

@Component({
  selector: 'identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})


export class IdentificarComponent implements OnInit {

  mensajeError: string;
  formLogin: FormGroup;
  // identificacionService: IdentificacionService

  constructor(private adoptantesService: AdoptantesService, private router: Router) {

    this.formLogin = new FormGroup({
      email: new FormControl('',
        Validators.required),
      password: new FormControl('',
        [Validators.required,
        Validators.pattern(/^(?=.*\d).{4,8}$/)]
      )
    })


  }

  ngOnInit(): void {
  }


  onSubmit(formValues) {
    // console.log(formValues);
    this.mensajeError = null;
    this.adoptantesService.login(formValues)
      .then(response => {

        if (response['error']) {
          this.mensajeError = response['error'];
        } else {
          // console.log(response['token']);

          localStorage.setItem('token_adoptantes', response['token']);
          this.router.navigate(['/vistaadoptante']);

        }


      })
      .catch(error => console.log(error));


  }

}
