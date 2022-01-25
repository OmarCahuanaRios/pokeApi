import { Component, OnInit } from '@angular/core';

import { PokemonServiceService } from 'src/app/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokefront';
 
  constructor(private service:PokemonServiceService){}
 
}
