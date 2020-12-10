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

  }

  ngOnInit(): void {
    // Recuperamos todos los Post
    //segun la ruta que recibimos cargamos un post u otra categoria. ActivatedRoute me devuelve el parmetro variable de la ruta
    this.activatedRoute.params.subscribe(params => {
      console.log(params.categoria);

      if (params.categoria !== undefined) {
        this.blogService.getByCategory(params.categoria)
          .then(response => {
            {
              this.posts = response;

            }
          })
          .catch(error => console.log(error));
      } else {
        this.blogService.getAllPosts()
          .then(response => {
            {
              this.posts = response;

            }
          })
          .catch(error => console.log(error));
      }
    })

    // Recuperamos titulos post recientes
    this.blogService.getPostByDate()
      .then(response => {
        this.arrPostRecientes = response
      })
      .catch(error => console.log(error));


    /* this.blogService.countTotalPost()
      .then(response => {
        this.numPostTotales = response[0];
        console.log(this.numPostTotales);
      }


      )
      .catch(error => console.log(error));



    this.blogService.countPost(pCategoria)
      .then(response => {
        this.numPost = response

      })
      .catch(error => console.log(error));
 */

  }


}





