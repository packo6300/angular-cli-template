import {RouterModule, Routes} from '@angular/router';

import {PrincipalComponent} from "./components/principal/principal.component";
import {LoginComponent} from "./components/login/login.component";
import {DocumentoComponent} from "./components/documento/documento.component";
import {ClientesComponent} from "./components/clientes/clientes.component";
import {PaqueteriasComponent} from './components/paqueterias/paqueterias.component';
import {ReporteFacturasComponent} from './components/reporte-facturas/reporte-facturas.component';
import {ReimpresionComponent} from './components/reimpresion/reimpresion.component';

const app_routes : Routes =[
    {path: 'home',component: PrincipalComponent},
    {path: 'login',component: LoginComponent},
    {path: 'documento', component: DocumentoComponent},
    {path: 'clientes', component: ClientesComponent},
    {path: 'paqueterias', component: PaqueteriasComponent},
    {path: 'reporteFacturas', component: ReporteFacturasComponent},
    {path: 'reimpresion', component: ReimpresionComponent},
    {path:'**',pathMatch: 'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);