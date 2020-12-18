import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService, Post } from '../servicios/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  arrPostRecientes: Post[];
  paginaActual: number;



  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute) {

    this.posts = [];
    this.paginaActual = 1;
  }

  ngOnInit(): void {
    // Recuperamos todos los Post
    //segun la ruta que recibimos cargamos un post u otra categoria. ActivatedRoute me devuelve el parmetro variable de la ruta
    this.activatedRoute.params.subscribe(params => {
      let valor = parseInt(params.categoria);



      if (params.categoria === undefined) {

        this.blogService.getByPage(1)
          .then(response => {
            {
              this.posts = response;

            }
          })
          .catch(error => console.log(error));



      }
      else if (isNaN(valor)) {
        this.blogService.getByCategory(params.categoria)
          .then(response => {
            {
              this.posts = response;

            }
          })
          .catch(error => console.log(error));

      } else {
        this.blogService.getPostTitle(valor)
          .then(response => {
            this.posts = response;
            console.log(this.posts);

          })
          .catch(error => console.log(error))

      }

    })

    // Recuperamos titulos post recientes
    this.blogService.getPostByDate()
      .then(response => {
        this.arrPostRecientes = response
      })
      .catch(error => console.log(error));
  }

  // Recuperamos Post por palabra introducida en buscador
  searchWord($event) {
    if ($event.target.value === "") {
      this.blogService.getAllPosts()
        .then(response => {
          {
            this.posts = response;

          }
        })
        .catch(error => console.log(error));
    } else {
      this.blogService.getPostByWord(($event.target.value).toLowerCase())
        .then(response => this.posts = response)
        .catch(error => console.log(error));
    }

  }

  //Botones paginación
  onClickAnterior() {
    if (this.paginaActual == 1) {
      console.log("No existe la página 0");
    } else {
      this.blogService.getByPage(--this.paginaActual)
        .then(response => this.posts = response)
        .catch(error => console.log(error));

    }
  }

  onClickSiguiente() {
    if (this.paginaActual == 3) {
      console.log("No existe la página 4");
    } else {
      this.blogService.getByPage(++this.paginaActual)
        .then(response => this.posts = response)
        .catch(error => console.log(error));

    }

  }


}





