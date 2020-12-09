import { Component, OnInit } from '@angular/core';
import { Protectora, ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-protectoras',
  templateUrl: './protectoras.component.html',
  styleUrls: ['./protectoras.component.css']
})
export class ProtectorasComponent implements OnInit {

  protectoras: Protectora[];

  constructor(private protectoraService: ProtectoraService) { }

  ngOnInit(): void {
    //obtenemos todas las protectoras (para imprimir en las cards)
    this.protectoraService.getAll()
      .then(response => {
        this.protectoras = response;
        console.log(response);
      })
      .catch(error => console.log(error));
  }

}
