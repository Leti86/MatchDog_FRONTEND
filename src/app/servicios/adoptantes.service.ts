import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.post<Adoptante>(`${this.baseUrl}/crear`, formsValues).toPromise();
  }
}
