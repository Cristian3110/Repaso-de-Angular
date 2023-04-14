import { Component, Input } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //Definiendo
  @Input() personajes: Personaje[] = [];

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
