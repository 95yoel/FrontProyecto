import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExploraComponent } from './explora/explora.component';
import { OficinaComponent } from './oficina/oficina.component';
import { CrucerosComponent } from './explora/cruceros/cruceros.component';
import { DiversionComponent } from './explora/diversion/diversion.component';
import { EspanaComponent } from './explora/espana/espana.component';
import { EuropaComponent } from './explora/europa/europa.component';
import { TemporadaComponent } from './explora/temporada/temporada.component';
import { ContenidoDestinoComponent } from './explora/contenido-destino/contenido-destino.component'

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path:'explora',component:ExploraComponent},
  { path:'oficina',component:OficinaComponent},
  { path:'cruceros',component:CrucerosComponent},
  { path:'diversion',component:DiversionComponent},
  { path:'espana',component:EspanaComponent},
  { path:'europa',component:EuropaComponent},
  { path:'temporada',component:TemporadaComponent},
  { path:'contenido-destino/:titulo/:parametro',component:ContenidoDestinoComponent}
  
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
