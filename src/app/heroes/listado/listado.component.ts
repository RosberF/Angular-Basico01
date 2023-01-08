import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Cap America', 'Hulk'];
  borradoHeroes: string= '';

  borrarHeroes(): void {
    this.borradoHeroes = this.heroes.shift() || '';

  }
}
