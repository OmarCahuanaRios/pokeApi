import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonServiceService } from './pokemon-service.service';
import { FormsModule } from '@angular/forms';
import { InfoCardComponent } from './info-card/info-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CadenaEvolucionComponent } from './cadena-evolucion/cadena-evolucion.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PokeCardComponent,
    InfoCardComponent,
    CadenaEvolucionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule, BrowserAnimationsModule,
    MatCardModule,NgxPaginationModule
  ],
  providers: [PokemonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
