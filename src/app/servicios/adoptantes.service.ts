import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Adoptante { //interfaz de adoptante creada, revisar si los tipos de datos son correctos
  nombre: string,
  apellidos: string,
  direccion: string,
  localidad: string,
  provincia: string,
  telefono: number,
  email: string,
  tiene_gato: string,
  espacio_exterior: string,
  medida_espacio_exterior?: number,
  tipo_espacio_exterior?: string,
  fotos_casa: string
}


@Injectable({
  providedIn: 'root'
})
export class AdoptantesService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/adoptantes";

  }

  create(formsValues): Promise<Adoptante> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Cabecera desde Angular'
      })
    }

    const body = {
      nombre: formsValues.nombre,
      apellidos: formsValues.apellidos,
      direccion: formsValues.direccion,
      email: formsValues.email,
      telefono: formsValues.telefono,
      localidad: formsValues.localidad,
      provincia: formsValues.provincia,
      tiene_gato: formsValues.tiene_gato,
      espacio_exterior: formsValues.espacio_exterior,
      metros_exterior: formsValues.metros_exterior,
      tipo_vivienda: formsValues.tipo_vivienda,
      tipo_espacio_exterior: formsValues.tipo_espacio_exterior,
      fotos_casa: formsValues.fotos_casa,
      password: formsValues.password

    }
    return this.httpClient.post<Adoptante>(`${this.baseUrl}/crear`, formsValues).toPromise();
  }

  login(formValues): Promise<any> {
    // console.log(formValues);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(`${this.baseUrl}/login`, formValues).toPromise();
  }

  isLogged(): boolean {
    if (localStorage.getItem('token_adoptantes')) {
      return true;
    } else {
      return false;
    }
  }

}
