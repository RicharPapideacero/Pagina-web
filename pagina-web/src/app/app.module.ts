import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { InfopaginaComponent } from './infopagina/infopagina.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionayudaComponent } from './seccionayuda/seccionayuda.component';
import { app_routing } from './app.rutas';
import { ProductunoComponent } from './Ejemplos productos/productuno/productuno.component';
import { ProductdosComponent } from './Ejemplos productos/productdos/productdos.component';
import { ProducttresComponent } from './Ejemplos productos/producttres/producttres.component';
import { ProductcuatroComponent } from './Ejemplos productos/productcuatro/productcuatro.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    InfopaginaComponent,
    FooterComponent,
    SeccionayudaComponent,
    ProductunoComponent,
    ProductdosComponent,
    ProducttresComponent,
    ProductcuatroComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
