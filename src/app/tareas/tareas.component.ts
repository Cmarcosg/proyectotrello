import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  @Input () tarea;
  @Input () lista;
  constructor() { }
  ngOnInit() {
  }
  eliminartarea (name) {
    const index = this.lista.tareas.indexOf(name);
    this.lista.tareas.splice( index , 1);
  }
}
