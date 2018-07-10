import {RouterModule, Routes} from '@angular/router';

import {PrincipalComponent} from "./components/principal/principal.component";
import {LoginComponent} from "./components/login/login.component";
const app_routes : Routes =[
    {path:'home',component: PrincipalComponent},
    {path:'login',component: LoginComponent},
    {path:'**',pathMatch: 'full', redirectTo:'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);