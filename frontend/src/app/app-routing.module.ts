import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExploraComponent } from './explora/explora.component';
import { OficinaComponent } from './oficina/oficina.component';
import { ContenidoDestinoComponent } from './explora/contenido-destino/contenido-destino.component'
import { ContenidoTipoComponent } from './explora/contenido-tipo/contenido-tipo.component';
import { ContenidoViajeComponent } from './explora/contenido-viaje/contenido-viaje.component';

//CONGIGURACION DE RUTAS DE LA APLICACION

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path:'explora',component:ExploraComponent},
  { path:'oficina',component:OficinaComponent},
  { path:'contenido-destino/:titulo/:parametro',component:ContenidoDestinoComponent},
  { path:'contenido-tipo/:titulo/:parametro',component:ContenidoTipoComponent},
  { path:'contenido-viaje/:parametro',component:ContenidoViajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
