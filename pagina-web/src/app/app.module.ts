import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { InfopaginaComponent } from './infopagina/infopagina.component';
import { FooterComponent } from './footer/footer.component';
import { SeccionayudaComponent } from './seccionayuda/seccionayuda.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    InfopaginaComponent,
    FooterComponent,
    SeccionayudaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
