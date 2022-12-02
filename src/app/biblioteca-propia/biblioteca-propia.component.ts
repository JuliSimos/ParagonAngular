import { Component } from '@angular/core';
import { LibrosDataService } from '../libros-data.service';
import { Libros } from '../lista-libros/Libros';

@Component({
  selector: 'app-biblioteca-propia',
  templateUrl: './biblioteca-propia.component.html',
  styleUrls: ['./biblioteca-propia.component.scss']
})
export class BibliotecaPropiaComponent{

  libros: Libros[];
  constructor(private estanteria: LibrosDataService){
    this.libros = [];
    estanteria.librosGuardados.subscribe(elem => this.libros = elem);

  }

}
