import { Version } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../model/Pokemon';
import { PokemonServiceService } from '../pokemon-service.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  pokemon:Pokemon=new Pokemon()
  public page: number;

  constructor(private router:Router,private service:PokemonServiceService,private Http: HttpClient) { }

  nombre:String
  urlImage:String
  Pokemones:String[]
  Pokemones2:String[]=new Array()
  nombre2:String
  contador:number
  UrlImage:String
  NextUrl:string
  BeforeUrl:string



  ngOnInit(): void {
    this.service.listarPokemones().subscribe((data:any)=>{
      console.log(data);
      this.contador=data.count;
      console.log("este es el contador",this.contador)
      this.Pokemones=data.results;
      console.log("arrray",this.Pokemones)
      
    })
}

verInfo(pokeName){
  localStorage.setItem("nombre",pokeName.toString())
  console.log(pokeName)
  this.service.obtenerImagenes(pokeName).subscribe((data)=>{
    this.router.navigate(["info"])
    console.log(data);
  })
      
}

retroceder(){
  this.service.listarPokemones().subscribe((data:any)=>{
    this.NextUrl=data.next;
    this.BeforeUrl=data.previous;
    
    this.service.listarPokemonesPagina(this.BeforeUrl).subscribe((data:any)=>{
      this.Pokemones=data.results
    });
    
    

  })

}
avanzar(){
  this.service.listarPokemones().subscribe((data:any)=>{
    this.NextUrl=data.next;
    this.BeforeUrl=data.previous;
    this.service.listarPokemonesPagina(this.NextUrl).subscribe((data:any)=>{
      this.Pokemones=data.results
    });
    

  })

}


}

