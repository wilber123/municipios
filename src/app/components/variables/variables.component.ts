import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {
  nombre:string= "Municipio"; 
  constructor() { }

  ngOnInit() {
  }

}
