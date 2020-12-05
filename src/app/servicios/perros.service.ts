import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Perro {
  id: number,
  raza: string,
  edad: string,
  tamano: string,
  edad_numero: number,
  sexo: string,
  apto_gatos: string,
  leishmania: string,
  localizacion: string,
  descripcion: string,
  imagen: string,
  nombre_perro: string,
  fk_protectora: number
}



@Injectable({
  providedIn: 'root'
})
export class PerrosService {

  private baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/perros";
  }

  getAll(): Promise<Perro[]> {
    return this.httpClient.get<Perro[]>(this.baseUrl).toPromise();
  }
}
