import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'identificar',
  templateUrl: './identificar.component.html',
  styleUrls: ['./identificar.component.css']
})
export class IdentificarComponent implements OnInit {

  formLogin: FormGroup;

  constructor() {
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

  onSubmit() {
    console.log(this.formLogin.value);
  }

}
