import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { iif } from 'rxjs';
import { BlogService, Post } from '../servicios/blog.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  arrPost: Post[];
  arrCategorias: any[];
  totalPost: Number;






  constructor(private blogService: BlogService,
    private router: Router) {
    this.arrCategorias = [{ titulo: "Aseo" }, { titulo: "Comportamiento" }, { titulo: "Cuidado" }, { titulo: "Seguridad" }];
    this.arrPost = []
    this.totalPost = 0;
  }

  async ngOnInit() {
    //aqui tengo que hacer una un bucle que recorra el array de categorias y me vaya devolviendo el numero de post de dicha categoria
    let i = 0;
    for (let categoria of this.arrCategorias) {
      /* const totalPost = await this.blogService.countPost(categoria) */
      const object = await this.blogService.countPost(categoria.titulo);
      console.log(object);

      this.arrCategorias[i].numPost = object.numPost;
      this.totalPost += object.numPost

      i++;
    }
    console.log(this.totalPost);

    console.log(this.arrCategorias);

  }





  onClick(pCategoria) {
    this.router.navigate(['/blog', pCategoria])
  }

  onClickAllCategories() {
    this.router.navigate(['/blog'])
  }
}
