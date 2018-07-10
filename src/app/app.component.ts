import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Inax v3.0';
    constructor(public _cs:ClientesService){
        
    }
}
