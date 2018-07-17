import {Component, OnInit, OnDestroy } from '@angular/core';
import {CotizacionesService} from '../../services/cotizaciones.service';
import { Subject } from 'rxjs';
@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css'],
    providers: [CotizacionesService]
})
export class PrincipalComponent implements OnDestroy,OnInit {
    
    public items;
    public dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
    constructor(private _clientesService: CotizacionesService) { }
    
    ngOnInit() : void {      
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
        },{
          title: 'Estado',
          data: 9
        }/*, {
          title: 'Convertir OV',
          data: 10
        }, {
          title: 'Imprimir',
          data: 11
        }*/]
      };
  }
    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }
    todasCot(j){
        switch (Number(j)) {
            case 1:
                alert('mis OV');
                break;
            case 2:
                alert('todas OV');
                break;
            case 3:
                alert('mis cot');
                break;
            case 4:
                    this._clientesService.getCotizaciones().subscribe(
                        result=>{
                            console.log(result);
                            this.items = result;
                            this.dtTrigger.next();
                        },
                        error=>{
                            var errorMessage=<any>error;
                            console.log(errorMessage);
                        }
                    );
                break;
            default:
            break;
        }
    }
   

}
