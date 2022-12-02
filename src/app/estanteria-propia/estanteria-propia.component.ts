import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LibrosDataService } from '../libros-data.service';
import { Libros } from '../lista-libros/Libros';

@Component({
  selector: 'app-estanteria-propia',
  templateUrl: './estanteria-propia.component.html',
  styleUrls: ['./estanteria-propia.component.scss']
})
export class EstanteriaPropiaComponent implements OnInit{

  librosGuardados : Libros[] = [];

  constructor(private estanteria: LibrosDataService){
    estanteria.librosGuardados.subscribe(elem => this.librosGuardados = elem);
  }
  ngOnInit(): void {
    this.LibrosGuardados();
  }

  

  LibrosGuardados(){
    console.log(this.librosGuardados);
  }
  
}
