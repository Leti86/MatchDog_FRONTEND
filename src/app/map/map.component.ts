
import { Component, OnInit } from '@angular/core';
import { ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  latitud: number;
  longitud: number;
  zoom: number;

  markers: any[];

  coordenadasProtectora0: number;
  coordenadasProtectora1: number;
  coordenadasProtectora2: number;
  coordenadasProtectora3: number;
  coordenadasProtectora4: number;
  coordenadasProtectora5: number;

  constructor(private protectoraService: ProtectoraService) {

  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 10;
    });


    //obtenemos la latitud y longitud de cada protectora (para imprimir los markers)
    this.protectoraService.getLatitudeLongitude()
      .then(respuesta => {
        this.coordenadasProtectora0 = respuesta[0];
        this.coordenadasProtectora1 = respuesta[1];
        this.coordenadasProtectora2 = respuesta[2];
        this.coordenadasProtectora3 = respuesta[3];
        this.coordenadasProtectora4 = respuesta[4];
        this.coordenadasProtectora5 = respuesta[5];
        console.log(this.coordenadasProtectora1, this.coordenadasProtectora2, this.coordenadasProtectora3, this.coordenadasProtectora4, this.coordenadasProtectora5);
        //HE CONSEGUIDO QUE LLEGUEN AQUÍ LAS LATITUDES Y LONGITUDES DE CADA PROTECTORA PERO ESTO ES BASTANTE CHAPUCERO. MEJORAR ESTE CÓDIGO.
      })
      .catch(error => console.log(error));


  }

}
