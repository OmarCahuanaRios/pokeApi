import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {
  
  pokemon:String
  urlImage:String
  baseExperience:String
  Altura:String
  peso:String

  constructor(private router:Router,private service:PokemonServiceService) { }

  ngOnInit(): void {
    let nombre=localStorage.getItem("nombre");
    this.pokemon=nombre
    
    console.log(nombre)
    this.service.obtenerImagenes(nombre).subscribe((data:any)=>{
      console.log("aún recibo data",data)
      this.baseExperience=data.base_experience
      this.Altura=data.height
      this.peso=data.weight
      this.urlImage=data.sprites.front_default

      
    })
  }

  Volver(){
    this.router.navigate([""])
  }
  VerCadena(){
    this.router.navigate(["cadena"])
    
  }

  

}
