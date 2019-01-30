import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VariablesComponent } from './components/variables/variables.component';
import {FormsModule} from "@angular/forms";

import { PreguntasComponent } from './components/preguntas/preguntas.component';
import {ServicioService} from "./service/servicio.service";

import {HttpClientModule} from '@angular/common/http';
import { PieComponent } from './components/pie/pie.component';

@NgModule({
  declarations: [
    AppComponent,
    VariablesComponent,
    PreguntasComponent,
    PieComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
