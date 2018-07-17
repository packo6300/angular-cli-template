import { Component } from '@angular/core';
import { ClientesService } from './services/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(public _cs:ClientesService){  }
}
