import { Component, OnInit } from '@angular/core';
import { BlogService } from '../servicios/blog.service';

export interface Post {
  imagen: string,
  titulo: string,
  texto: string,
  fecha: string,
  categoria: string

}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];
  arrCategorias: string[];
  totalPostAseo: number;
  totalPostCuidado: number;
  totalPostSeguridad: number;
  totalPostComportamiento: number;


  constructor(private blogService: BlogService) {

    this.arrPost = [];
    this.arrCategorias = [];
    this.totalPostAseo = 0;
    this.totalPostCuidado = 0;
    this.totalPostSeguridad = 0;
    this.totalPostComportamiento = 0;
  }

  ngOnInit(): void {

    this.blogService.getAllPost()
      .then(posts => this.arrPost = posts)
      .catch(error => console.log(error));

    this.blogService.getAllCategories()
      .then(categories => this.arrCategorias = categories)
      .catch(error => console.log(error));

    this.countPost(this.arrPost);

  }

  async onClick(pCategoria) {
    this.arrPost = await this.blogService.getPostsByCategoria(pCategoria);
  }

  async onClickAll() {
    this.arrPost = await this.blogService.getAllPost();
  }

  // Funcion para saber el total de POST por categorias
  countPost(pArrPost) {
    for (let post of pArrPost) {
      let categoriaPost = post.categoria;
      switch (categoriaPost) {
        case 'aseo':
          this.totalPostAseo++;
          break;
        case 'cuidado':
          this.totalPostCuidado++;
          break;
        case 'seguridad':
          this.totalPostSeguridad++;
          break;
        case 'comportamiento':
          this.totalPostComportamiento++;
          break;

        default:
          console.log('No se ha logrado contar las categorias')
          break;

      }

    }
  }
}
