import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Protectora {
  id: number,
  nombre: string,
  email: string,
  telefono: number,
  direccion: string,
  localidad: string,
  provincia: string,
  latitud: number,
  longitud: number,
  necesidad_voluntarios: string,
  imagen: string,
  comentarios: string,

}


@Injectable({
  providedIn: 'root'
})
export class ProtectoraService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = "http://localhost:3000/api/protectoras";

  }

  getAll(): Promise<Protectora[]> {
    return this.httpClient.get<Protectora[]>(this.baseUrl).toPromise();
  }

  create(formsValues): Promise<Protectora> {
    return this.httpClient.post<Protectora>(this.baseUrl, formsValues).toPromise();
  }

  getCoord(): Promise<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/coordenadas/coordenadas`).toPromise();
  }

  login(formValues): Promise<any> {
    console.log(formValues);
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.post<any>(`${this.baseUrl}/login`, formValues, httpOptions).toPromise();
  }

  perfil(): Promise<Protectora> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_protectoras")
      })
    }
    return this.httpClient.get<Protectora>(`${this.baseUrl}/perfil`, httpOptions).toPromise();
  }

  getTablaData(): Promise<any[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": localStorage.getItem("token_protectoras")
      })
    }
    return this.httpClient.get<any[]>(`${this.baseUrl}/datatable`, httpOptions).toPromise();

  }



}
