import { Injectable } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 16000,
    },
    {
      nombre: 'Vegeta',
      poder: 15000,
    },
  ];

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor() {
    console.log('servicio inicializado');
  }
}
