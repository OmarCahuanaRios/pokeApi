import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EvolucionService {

  constructor(private Http: HttpClient) { }

  cadenaEvolucion(cadena:string){
    
    return this.Http.get(cadena)

  }
}
