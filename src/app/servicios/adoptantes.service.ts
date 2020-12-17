import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perro } from './perros.service';



export interface Adoptante {
  id?: number;
  nombre: string,
  apellidos: string,
  direccion: string,
  localidad: string,
  provincia: string,
  telefono: number,
  email: string,
  tiene_gato: string,
  espacio_exterior: string,
  metros_exterior?: number,
  tipo_vivienda: string,
  tipo_espacio_exterior?: string,
  fotos_casa: string,
  password: string,
  rol: string
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
        "Content-Type": "application/json"
      })
    }

    return this.httpClient.post<Adoptante>(`${this.baseUrl}/crear`, formsValues, httpOptions).toPromise();
  }

  login(formValues): Promise<any> {
    // console.log(formValues);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(`${this.baseUrl}/login`, formValues, httpOptions).toPromise();
  }

  // Obtengo datos del Adoptante
  perfil(): Promise<Adoptante> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_adoptantes")
      })
    }
    return this.httpClient.get<Adoptante>(`${this.baseUrl}/perfil`, httpOptions).toPromise();
  }

  getFavouriteDogs(): Promise<Perro[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_adoptantes")
      })
    }
    return this.httpClient.get<Perro[]>(`${this.baseUrl}/perrosfavoritos`, httpOptions).toPromise();
  }

  eliminarPerroListaFavoritos(pIdFavoritos): Promise<Perro> {
    return this.httpClient.get<Perro>(`${this.baseUrl}/perrosfavoritos/borrar/${pIdFavoritos}`).toPromise();
  }

  update(formValues): Promise<Adoptante> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_adoptantes")
      })
    }

    return this.httpClient.post<Adoptante>(`${this.baseUrl}/update`, formValues, httpOptions).toPromise();

  }












}
