import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Usuarios {

}


@Injectable({
  providedIn: 'root'
})
export class IdentificacionService {
  private baseurl: string;

  constructor(private httpClient: HttpClient) {
    this.baseurl = 'http://localhost:3000/api/usuarios/login'

  }

  login(formValues) {

  }
}
