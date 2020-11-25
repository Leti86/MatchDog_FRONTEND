
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

  constructor(private protectoraService: ProtectoraService) {

  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
      this.zoom = 10;
    });
  }

}
