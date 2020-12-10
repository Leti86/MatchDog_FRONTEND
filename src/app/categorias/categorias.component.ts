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
  arrCategorias: string[];
  totalPostAseo: number;
  totalPostComportamiento: number;
  totalPostCuidado: number;
  totalPostSeguridad: number;



  constructor(
    private blogService: BlogService,
    private router: Router) {
    this.arrCategorias = ["aseo", "comportamiento", "cuidado", "seguridad"];
    this.arrPost = []
  }

  ngOnInit(): void {
    //aqui tengo que hacer una un bucle que recorra el array de categorias y me vaya devolviendo el numero de post de dicha categoria




  }

  onClick(pCategoria) {
    this.router.navigate(['/blog', pCategoria])
  }

  onClickAllCategories() {
    this.router.navigate(['/blog'])
  }
}
