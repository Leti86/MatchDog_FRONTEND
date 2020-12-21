import { Component, OnInit } from '@angular/core';
import { Perro } from '../servicios/perros.service';
import { Protectora, ProtectoraService } from '../servicios/protectora.service';

@Component({
  selector: 'app-vista-protectora',
  templateUrl: './vista-protectora.component.html',
  styleUrls: ['./vista-protectora.component.css']
})
export class VistaProtectoraComponent implements OnInit {

  datosProtectora: Protectora;
  datosTabla: any[];
  perrosDeProtectoras: Perro[];

  constructor(
    private protectoraService: ProtectoraService
  ) {
    this.perrosDeProtectoras = [];
  }

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

    this.protectoraService.getByDogProtectora()
      .then(response =>
        this.perrosDeProtectoras = response
      )
      .catch(error => console.log(error));
  }

  onClick(pIdFavorito) {

    this.protectoraService.deleteByFavoriteRelation(pIdFavorito)
      .then(response => {
        this.protectoraService.getTablaData()
          .then(response => {
            this.datosTabla = response;
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }


}
