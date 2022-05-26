import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { SeccionayudaComponent } from "./seccionayuda/seccionayuda.component";
import { InfopaginaComponent } from "./infopagina/infopagina.component";
import { ProductunoComponent } from "./Ejemplos productos/productuno/productuno.component";
import { ProductdosComponent } from "./Ejemplos productos/productdos/productdos.component";
import { ProducttresComponent } from "./Ejemplos productos/producttres/producttres.component";
import { ProductcuatroComponent } from "./Ejemplos productos/productcuatro/productcuatro.component";

const app_routes: Routes = [
    {path: 'inicio', component:IndexComponent},
    {path: 'seccionayuda', component:SeccionayudaComponent},
    {path: 'Sobrenosotros', component:InfopaginaComponent},
    {path: 'ProductoUno', component:ProductunoComponent},
    {path: 'Productodos', component:ProductdosComponent},
    {path: 'Productotres', component:ProducttresComponent},
    {path: 'Productocuatro', component:ProductcuatroComponent},
    {path: '**', pathMatch:'full',redirectTo:'inicio'},
];

export const app_routing = RouterModule.forRoot(app_routes);