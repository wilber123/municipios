import { Component, OnInit, Input } from '@angular/core';
import {ServicioService} from "../../service/servicio.service";


@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

  constructor(private _ds:ServicioService) { }
  @Input()
  indexSelected:number;
  ngOnInit() {
  }

}
