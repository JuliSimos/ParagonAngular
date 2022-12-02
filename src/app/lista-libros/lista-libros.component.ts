import { Component, OnInit } from '@angular/core';
import { LibrosDataService } from '../libros-data.service';
import { Libros } from './Libros';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit{

  libros: Libros[];

constructor(private estanteria: LibrosDataService){
  this.libros = [];
}
  ngOnInit(): void {
    this.libros = this.estanteria.getAll();
  }


}

