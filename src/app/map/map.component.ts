
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Protectora, ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  latitud: number;
  longitud: number;
  listadoCoords: any[];

  protectoraClicada: Protectora;

  @Output() protectoraSeleccionada: EventEmitter<Protectora>;



  constructor(private protectoraService: ProtectoraService) {


    this.latitud = 40.437698;
    this.longitud = -3.675525;
    this.listadoCoords = [];

    this.protectoraSeleccionada = new EventEmitter();


  }

  ngOnInit(): void {

    this.protectoraService.getCoord()
      .then(response => {
        this.listadoCoords = response
      })
      .catch(error => console.log(error));

  }

  onDbClick($event) {
    console.log('Hola Leti');
    //this.protectoraSeleccionada.emit(this.protectoraClicada);


  }




}










