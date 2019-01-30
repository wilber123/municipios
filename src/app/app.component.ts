import { Component } from '@angular/core';
import {ServicioService} from "./service/servicio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'consultaAnt';
selected=0;
  constructor( private _ds:ServicioService){ }
onChange(index :number){
	this.selected=index;
}
}
