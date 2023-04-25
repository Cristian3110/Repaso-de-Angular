import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';
import { DbzService } from '../servicesDBZ/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2500,
  };

  //Mediante un geter puedo obterner la misma
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   console.log(argumento);
  //agregando al arreglo personajes
  // this.personajes.push(argumento);
  // }

  constructor() {
    // this.personajes = this.dbzService.personajes;
  }
}
