import { Component, OnInit } from '@angular/core';
import { BlogService, Post } from '../servicios/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  arrCategorias: string[];
  arrPostRecientes: Post[];




  constructor(private blogService: BlogService) {
    this.arrCategorias = ["aseo", "comportamiento", "cuidado", "seguridad"]
  }



  ngOnInit(): void {
    // Recuperamos todos los Post
    this.blogService.getAllPosts()
      .then(response => {
        {
          this.posts = response;
          console.log(response);

        }
      })
      .catch(error => console.log(error));


    this.blogService.getPostByDate()
      .then(response => {
        this.arrPostRecientes = response
        console.log(response);

      })
      .catch(error => console.log(error));


  }

  onClick(pCategoria) {
    this.blogService.getByCategory(pCategoria)
      .then(response => {
        this.posts = response
      })
      .catch(error => { console.log(error) });
  }

  onClickAllCategories() {
    this.blogService.getAllPosts()
      .then(response => {
        this.posts = response
      })
      .catch(error => console.log(error));

  }




}
