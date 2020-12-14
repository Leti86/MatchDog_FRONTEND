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



  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute) {

    this.posts = [];

  }

  ngOnInit(): void {
    // Recuperamos todos los Post
    //segun la ruta que recibimos cargamos un post u otra categoria. ActivatedRoute me devuelve el parmetro variable de la ruta
    this.activatedRoute.params.subscribe(params => {
      let valor = parseInt(params.categoria);
      console.log('hola', valor);
      console.log('adios', params.categoria);


      if (params.categoria === undefined) {

        this.blogService.getAllPosts()
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
    console.log($event.target.value);
    this.blogService.getPostByWord($event.target.value)
      .then(response => this.posts = response)
      .catch(error => console.log(error));

  }


}





