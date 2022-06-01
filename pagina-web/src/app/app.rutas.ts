import { Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IndexComponent } from "./index/index.component";
import { SeccionayudaComponent } from "./seccionayuda/seccionayuda.component";
import { InfopaginaComponent } from "./infopagina/infopagina.component";
import { ProductunoComponent } from "./Ejemplos productos/productuno/productuno.component";
import { ProductdosComponent } from "./Ejemplos productos/productdos/productdos.component";
import { ProducttresComponent } from "./Ejemplos productos/producttres/producttres.component";
import { ProductcuatroComponent } from "./Ejemplos productos/productcuatro/productcuatro.component";
import { ProductcincoComponent } from "./Ejemplos productos/productcinco/productcinco.component";
import { ProductseisComponent } from "./Ejemplos productos/productseis/productseis.component";
import { ProductsieteComponent } from "./Ejemplos productos/productsiete/productsiete.component";
import { ProductochoComponent } from "./Ejemplos productos/productocho/productocho.component";
import { ProductonueveComponent } from "./Ejemplos productos/productonueve/productonueve.component";
import { ProductodiesComponent } from "./Ejemplos productos/productodies/productodies.component";
import { ProductoonceComponent } from "./Ejemplos productos/productoonce/productoonce.component";
import { ProductodoceComponent } from "./Ejemplos productos/productodoce/productodoce.component";
const app_routes: Routes = [
    {path: 'inicio', component:IndexComponent},
    {path: 'seccionayuda', component:SeccionayudaComponent},
    {path: 'Sobrenosotros', component:InfopaginaComponent},
    {path: 'Arduino UNO R3 [A000066] Placa de microcontrolador', component:ProductunoComponent},
    {path: 'PROTOBOARD GRANDE 800 PUNTOS', component:ProductdosComponent},
    {path: 'PROTOBOARD CHICA 400 PUNTOS', component:ProducttresComponent},
    {path: 'Cable Dupont Macho-Macho 30cm', component:ProductcuatroComponent},
    {path: 'PoiLee 1N5408 - 30 unidades de diodos', component:ProductcincoComponent},
    {path: 'Mxuteuk - Mini interruptor', component:ProductseisComponent},
    {path: 'Batería de Litio 3 V CR2477', component:ProductsieteComponent},
    {path: 'Cerradura Electrónica Solenoide 12 V para Puerta', component:ProductochoComponent},
    {path: 'Display Cristal Líquido 16 x 2 Luz Azul', component:ProductonueveComponent},
    {path: 'Display LCD Gráfica 84 x 84 Nokia 5110', component:ProductodiesComponent},
    {path: '74HC148N CMOS Codificador Octal 8 a 3 Lineas', component:ProductoonceComponent},
    {path: '2SD1384 Pequeña Señal', component:ProductodoceComponent},
    {path: '**', pathMatch:'full',redirectTo:'inicio'},
];

export const app_routing = RouterModule.forRoot(app_routes);