import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{title}}</h1>

<h3>La Base es : <strong> {{base}} </strong></h3>
<button (click)="calculo(base)">+ {{base}}</button>
<span> {{numero}} </span>
<button (click)="calculo(-base)">- {{base}}</button>
`


})

export class ContadorComponent {
    title: string = 'Contador App';
    numero: number = 1;
    base: number = 5;

    calculo(valor: number) {
        this.numero += valor;
    }


}