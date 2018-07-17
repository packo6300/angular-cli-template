import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http/';
import { DataTablesModule } from 'angular-datatables';
//rutas de navegacion
import {app_routing} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ReporteFacturasComponent } from './components/reporte-facturas/reporte-facturas.component';
import { PaqueteriasComponent } from './components/paqueterias/paqueterias.component';
import { ReimpresionComponent } from './components/reimpresion/reimpresion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PrincipalComponent,
    DocumentoComponent,
    ClientesComponent,
    ReporteFacturasComponent,
    PaqueteriasComponent,
    ReimpresionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
