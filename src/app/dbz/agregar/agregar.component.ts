import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';
import { DbzService } from '../servicesDBZ/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //Definiendo
  // @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: 'Trunk',
    poder: 15000,
  };

  //importando el servicio para utilizarlo
  constructor(private dbzService: DbzService) {}

  //emitiendo un valor al padre
  // Sabiendo que está emitiendo un Personaje definido en las interfaces
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // validación si no hay data insertada
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // console.log(this.nuevo);
    //emitiendo
    // this.onNuevoPersonaje.emit(this.nuevo);

    //?Utilizando el service
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0,
    };
  }
}
