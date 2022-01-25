import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Pokemon } from 'src/app/model/Pokemon'

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  //private Url='http://192.168.0.14:8080/pokemones'
  private Url='https://pokeapi.co/api/v2/pokemon-species'
  private Url2='https://pokeapi.co/api/v2/pokemon'
  

  constructor(private Http: HttpClient) { }

  listarPokemonesPagina(name:string){
    console.log(name)
    return this.Http.get(name);
  }

  listarPokemones(){
    return this.Http.get(this.Url)
  }
  buscarPokemon(name:String){
    return this.Http.get(`${this.Url}/${name}`)
  }
  obtenerImagenes(name:String){
    return this.Http.get(`${this.Url2}/${name}`)
  }
  
  
}
