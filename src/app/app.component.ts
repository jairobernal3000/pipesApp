import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'jairo bernal';
  valor: number = 1000;
  obj = {
    nombre: "Jairo"
  }

  mostrarNombre(){
    console.log( this.nombre );
  }
}
