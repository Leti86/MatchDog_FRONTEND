import { Injectable } from '@angular/core';
import { Post } from '../blog/blog.component';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  arrListadoPost: Post[];
  arrCategorias: string[];



  constructor() {
    this.arrListadoPost = [
      { imagen: "https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo-830x588.jpg", titulo: "La importancia de la LLAMADA", texto: "Es tanta la importancia de la llamada que puede llegar incluso a salvar la vida de tu perro en determinadas circunstancias. Enseñar al perro a acudir a tu llamada es uno de los ejercicios más importantes de la obediencia canina. Los perros que vienen cuando se les llama tienen más libertad para jugar con sus amigos en el parque, ir a pasear al campo y estar seguros en cualquier lugar.", fecha: "12/11/2020", categoria: "cuidado" },
      { imagen: "https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo-830x588.jpg", titulo: "Golpe de CALOR en el perro", texto: "Es tanta la importancia de la llamada que puede llegar incluso a salvar la vida de tu perro en determinadas circunstancias. Enseñar al perro a acudir a tu llamada es uno de los ejercicios más importantes de la obediencia canina. Los perros que vienen cuando se les llama tienen más libertad para jugar con sus amigos en el parque, ir a pasear al campo y estar seguros en cualquier lugar.", fecha: "10/08/2020", categoria: "cuidado" },
      { imagen: "https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo-830x588.jpg", titulo: "SEGURIDAD en la calle", texto: "Es tanta la importancia de la llamada que puede llegar incluso a salvar la vida de tu perro en determinadas circunstancias. Enseñar al perro a acudir a tu llamada es uno de los ejercicios más importantes de la obediencia canina. Los perros que vienen cuando se les llama tienen más libertad para jugar con sus amigos en el parque, ir a pasear al campo y estar seguros en cualquier lugar.", fecha: "10/01/2020", categoria: "seguridad" },
      { imagen: "https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo-830x588.jpg", titulo: "¿Tu perro se restriega sobre la hierba?", texto: "Es tanta la importancia de la llamada que puede llegar incluso a salvar la vida de tu perro en determinadas circunstancias. Enseñar al perro a acudir a tu llamada es uno de los ejercicios más importantes de la obediencia canina. Los perros que vienen cuando se les llama tienen más libertad para jugar con sus amigos en el parque, ir a pasear al campo y estar seguros en cualquier lugar.", fecha: "10/04/2020", categoria: "aseo" },
      { imagen: "https://www.mundoperros.es/wp-content/uploads/2016/05/perro_comiendo-830x588.jpg", titulo: "Cuando tu animal SE PIERDE", texto: "Es tanta la importancia de la llamada que puede llegar incluso a salvar la vida de tu perro en determinadas circunstancias. Enseñar al perro a acudir a tu llamada es uno de los ejercicios más importantes de la obediencia canina. Los perros que vienen cuando se les llama tienen más libertad para jugar con sus amigos en el parque, ir a pasear al campo y estar seguros en cualquier lugar.", fecha: "10/07/2020", categoria: "seguridad" }
    ];
    this.arrCategorias = ["cuidado", "seguridad", "aseo", "comportamiento"]

  }
  // Muestra todos los post
  getAllPost(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrListadoPost);
    });
  }
  // Muestra todas las categoorias
  getAllCategories(): Promise<string[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrCategorias);
    });
  }

  // Filtra por post-categoria
  getPostsByCategoria(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      const arrFiltrado = this.arrListadoPost.filter(post => {
        return post.categoria == pCategoria;
      });
      resolve(arrFiltrado);
      console.log(arrFiltrado);
    });
  }



}
