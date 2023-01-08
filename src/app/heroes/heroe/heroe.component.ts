import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})


export class HeroeComponent {
    name: string = 'Iron Man';
    edad: number = 35;

    get nombreCapitalizado():string{
        return this.name.toUpperCase();
    }

    obtenerNombre(): string{
       return `${this.name} - ${this.edad}`;
    }
    cambiarNombre(): void {
        this.name = 'Capitan America';
    }
    cambiarEdad(): void {
        this.edad = 95;
    }

}