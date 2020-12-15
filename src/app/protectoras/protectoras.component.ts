import { Component, Input, OnInit } from '@angular/core';
import { Protectora, ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-protectoras',
  templateUrl: './protectoras.component.html',
  styleUrls: ['./protectoras.component.css']
})
export class ProtectorasComponent implements OnInit {

  protectoras: Protectora[];
  coordenadaMarker: number;

  @Input() protectoraSeleccionada: number;

  constructor(private protectoraService: ProtectoraService) {
    this.protectoraSeleccionada = 0;
    this.coordenadaMarker = 0;

  }

  ngOnInit(): void {
    //obtenemos todas las protectoras (para imprimir en las cards)
    this.protectoraService.getAll()
      .then(response => {
        this.protectoras = response;
        //console.log(response);
      })
      .catch(error => console.log(error));
  }

  ReciboCoordenada($event) {

    this.coordenadaMarker = $event;
    console.log(this.coordenadaMarker);

  }

}
