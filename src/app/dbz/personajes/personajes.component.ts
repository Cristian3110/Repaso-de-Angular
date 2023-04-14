import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interface/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  // el input determina que es un componente hijo
  @Input() personajes: Personaje[] = [];
}
