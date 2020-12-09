import { HttpClient } from '@angular/common/http';
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

  getLatitudeLongitude() {
    return this.httpClient.get(`${this.baseUrl}/coordenadas/coordenadas`).toPromise();
  }

}
