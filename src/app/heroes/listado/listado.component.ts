import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';
  borrarHeroes() {
    console.log('borrando...');
    // si el rertorno es un undefined que regrese un string vacío
    this.heroeBorrado = this.heroes.pop() || 'No hay más que borrar';
  }
}
