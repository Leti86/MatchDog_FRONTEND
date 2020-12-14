
import { Component, OnInit } from '@angular/core';
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



  constructor(private protectoraService: ProtectoraService) {


    this.latitud = 40.437698;
    this.longitud = -3.675525;
    this.listadoCoords = [];

  }

  ngOnInit(): void {

    this.protectoraService.getCoord()
      .then(response => {
        this.listadoCoords = response
      })
      .catch(error => console.log(error));

  }




}










