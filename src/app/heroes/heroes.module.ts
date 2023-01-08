import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [  //Listamos Todos los componets
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //Mandamos solo el que se va a mostrar
        ListadoComponent
    ],
    imports:[ //Importante solo si se usa el *ngFor o *ngIf
       CommonModule 
    ]
})



export class HeroesModule{

}