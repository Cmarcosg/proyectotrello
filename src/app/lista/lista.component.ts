import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  @Input() lista;
  @Input() listas;

  nuevaTarea: string;

  constructor() {}

  ngOnInit() {}


 addtask (txt) {
   this.lista.tareas.push({
     texto : txt
   });
   this.nuevaTarea = '';
 }

 eliminarlista (name) {
   const index = this.listas.indexOf(name);
   this.listas.splice(index, 1);
 }
}
