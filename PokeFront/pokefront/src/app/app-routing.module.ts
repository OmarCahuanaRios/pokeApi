import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadenaEvolucionComponent } from './cadena-evolucion/cadena-evolucion.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { PokeCardComponent } from './poke-card/poke-card.component';


const routes: Routes = [
  {path:'',component:PokeCardComponent},
  {path:'info',component:InfoCardComponent},
  {path:'cadena',component:CadenaEvolucionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
