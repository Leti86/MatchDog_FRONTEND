import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Post {
  id?: number;
  imagen: string,
  titulo: string,
  texto: string,
  fecha: Date,
  categoria: string

}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private baseUrl: string;

  constructor(private httpClient: HttpClient) {

    this.baseUrl = "http://localhost:3000/api/posts";

  }

  getAllPosts(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(this.baseUrl).toPromise();
  }

  getByCategory(pCategoria): Promise<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/${pCategoria}`).toPromise();
  }

  getPostByDate(): Promise<Post[]> {
    return this.httpClient.get<Post[]>(`${this.baseUrl}/fecha/recientes`).toPromise();
  }






}
