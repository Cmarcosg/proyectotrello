import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listas = [];
  name: string;
  addlist(txt) {
    this.listas.push( {
      name : txt,
      tareas : []
    });
    this.name = '';
  }
}
