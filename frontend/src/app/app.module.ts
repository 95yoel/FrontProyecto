import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { EsferaComponent } from './inicio/esfera/esfera.component';
import { CabeceraComponent } from './inicio/cabecera/cabecera.component';
import { ExploraComponent } from './explora/explora.component';
import { ContenidoComponent } from './explora/contenido/contenido.component';
import { LayoutCabeceraComponent } from './explora/layout-cabecera/layout-cabecera.component';
import { CarruselComponent } from './explora/contenido/carrusel/carrusel.component';
import { MenuComponent } from './explora/contenido/menu/menu.component';
import { OficinaComponent } from './oficina/oficina.component';
import { ModalLoginComponent } from './modal-login/modal-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EsferaComponent,
    CabeceraComponent,
    ExploraComponent,
    ContenidoComponent,
    LayoutCabeceraComponent,
    CarruselComponent,
    MenuComponent,
    OficinaComponent,
    ModalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }