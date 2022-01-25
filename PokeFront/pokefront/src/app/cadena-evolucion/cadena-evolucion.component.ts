import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonServiceService } from '../pokemon-service.service';
import {EvolucionService} from 'src/app/cadena-evolucion/evolucion.service'

import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-cadena-evolucion',
  templateUrl: './cadena-evolucion.component.html',
  styleUrls: ['./cadena-evolucion.component.css']
})
export class CadenaEvolucionComponent implements OnInit {


  objeto1:Object
  pokemon:String
  urlImage:String
  baseExperience:String
  Altura:String
  peso:String
  urlChain:string


  objeto2:Object
  pokemon2:String
  urlImage2:String
  baseExperience2:String
  Altura2:String
  peso2:String


  objeto3:Object
  pokemon3:String
  urlImage3:String
  baseExperience3:String
  Altura3:String
  peso3:String

  constructor( private router:Router,private service:PokemonServiceService,private Http:HttpClient,private service2:EvolucionService) { }


  ngOnInit(): void {
    let nombre=localStorage.getItem("nombre")
    this.service.buscarPokemon(nombre).subscribe((data:any)=>{
      this.urlChain=data.evolution_chain.url
      
      
      
     

      this.service2.cadenaEvolucion(this.urlChain).subscribe((data:any)=>{
        console.log(data)
        this.objeto1=data.chain.species
        this.pokemon=this.objeto1['name']
        this.service.obtenerImagenes(this.pokemon).subscribe((data:any)=>{
          this.baseExperience=data.base_experience
          this.Altura=data.height
          this.peso=data.weight
          this.urlImage=data.sprites.front_default
        })

        this.objeto2=data.chain.evolves_to[0].species
        this.pokemon2=this.objeto2['name']
        this.service.obtenerImagenes(this.pokemon2).subscribe((data:any)=>{
          this.baseExperience2=data.base_experience
          this.Altura2=data.height
          this.peso2=data.weight
          this.urlImage2=data.sprites.front_default
        })

        this.objeto3=data.chain.evolves_to[0].evolves_to[0].species
        this.pokemon3=this.objeto3['name']

        this.service.obtenerImagenes(this.pokemon3).subscribe((data:any)=>{
          this.baseExperience3=data.base_experience
          this.Altura3=data.height
          this.peso3=data.weight
          this.urlImage3=data.sprites.front_default
        })
        
        
        

      })

     

      
    })

    



    
    
  }
  

  Volver(){
    this.router.navigate(["info"]);
  }

  

}
