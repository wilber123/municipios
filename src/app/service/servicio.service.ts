import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
 
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
municipios:any[] =[];
  constructor(private http:HttpClient) {
  this.consultarMunicipios();
   }
   consultarMunicipios(){
   this.http.get("assets/data/municipios.json").subscribe( (respuesta: any[])=> {
    this.municipios=respuesta.filter(dep => dep["departamento"].includes("BOYACA"));
    console.log(this.municipios);
   });
   }
}
