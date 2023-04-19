import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 16000,
    },
    {
      nombre: 'Vegeta',
      poder: 15000,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 2500,
  };

  agregarNuevoPersonaje(argumento: Personaje) {
    console.log(argumento);
    //agregando al arreglo personajes
    this.personajes.push(argumento);
  }
}
