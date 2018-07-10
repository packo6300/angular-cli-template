import { Component, OnInit } from '@angular/core';
import {CotizacionesService} from '../../services/cotizaciones.service';

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css'],
    providers: [CotizacionesService]
})
export class PrincipalComponent implements OnInit {
    public items;
    public dtOptions: DataTables.Settings = {};

  constructor(
      private _clientesService: CotizacionesService
  ) { }

  ngOnInit() {
      this._clientesService.getCotizaciones().subscribe(
        result=>{
            console.log(result);
            this.items = result;
        },
        error=>{
            var errorMessage=<any>error;
            console.log(errorMessage);
        }
      );
      this.dtOptions = {
          ajax: this.items,
        columns: [{
          title: '',
          data: 0
        }, {
          title: 'Cotización',
          data: 1
        }, {
          title: 'Fecha',
          data: 2
        }, {
          title: 'Código Cliente',
          data: 3
        }, {
          title: 'Cliente',
          data: 4
        }, {
          title: 'Sitio',
          data: 5
        }, {
          title: 'Almacén',
          data: 6
        }, {
          title: 'Modo de Entrega',
          data: 7
        }, {
          title: 'Vendedor',
          data: 8
        }, {
          title: 'Estado',
          data: 9
        }, {
          title: 'Convertir OV',
          data: 10
        }, {
          title: 'Imprimir',
          data: 11
        }]
      };
  }
 


}
