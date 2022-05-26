import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { SeccionayudaComponent } from "./seccionayuda/seccionayuda.component";
import { InfopaginaComponent } from "./infopagina/infopagina.component";

const app_routes: Routes = [
    {path: 'inicio', component:IndexComponent},
    {path: 'seccionayuda', component:SeccionayudaComponent},
    {path: 'Sobrenosotros', component:InfopaginaComponent},
    {path: '**', pathMatch:'full',redirectTo:'inicio'},
];

export const app_routing = RouterModule.forRoot(app_routes);