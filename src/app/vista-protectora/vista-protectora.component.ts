import { Component, OnInit } from '@angular/core';
import { Protectora, ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-vista-protectora',
  templateUrl: './vista-protectora.component.html',
  styleUrls: ['./vista-protectora.component.css']
})
export class VistaProtectoraComponent implements OnInit {

  datosProtectora: Protectora;
  datosTabla: any[];

  constructor(
    private protectoraService: ProtectoraService
  ) { }

  ngOnInit(): void {

    this.protectoraService.perfil()
      .then(response => {
        this.datosProtectora = response;
      })
      .catch(error => console.log(error));


    this.protectoraService.getTablaData()
      .then(response => {
        this.datosTabla = response;
      })
      .catch(error => console.log(error));

  }

}
