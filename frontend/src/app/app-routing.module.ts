import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ExploraComponent } from './explora/explora.component';
import { OficinaComponent } from './oficina/oficina.component';

const routes: Routes = [

  { path: '', component: InicioComponent },
  { path:'explora',component:ExploraComponent},
  { path:'oficina',component:OficinaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
