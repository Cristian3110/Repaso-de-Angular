import { Component, OnInit } from '@angular/core';

interface Personaje {
  nombre: string;
  poder: number;
}

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
    nombre: 'Trunk',
    poder: 15000,
  };

  cambiarNombre(event: any) {
    console.log(event.target.value);
  }

  agregar() {
    // validación si no hay data insertada
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0,
    };
    console.log(this.nuevo);
  }
}
