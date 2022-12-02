import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libros } from './lista-libros/Libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosDataService {

  libros : Libros[]= [
    {
    portada: "assets/img/miPortada.jpg",
    titulo: "Mi portada",
    genero: "Habilidades",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
    guardado: true,
  },
  {
    portada: "assets/img/filosofiaParaUnaVidaUnica.jpg",
    titulo: "Filosofia Para Una Vida Unica",
    genero: "Filosofia",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
    guardado: true,
  },
  {
    portada: "assets/img/Almendra.jpg",
    titulo: "Almendra",
    genero: "Ficción",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
    guardado: false
  },
  {
    portada: "assets/img/laUnicaEnLaTierra.jpg",
    titulo: "La Unica en la Tierra",
    genero: "Romance",
    descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
    guardado: true,
  },
  {
  portada: "assets/img/losChicosdeLaNIckel.jpg",
  titulo: "Los Chicos de la NIckel",
  genero: "Ficcion",
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
  guardado: false
},
{
  portada: "assets/img/nuncaDejesDeSoñar.jpg",
  titulo: "Nunca dejes de soñar",
  genero: "Narrativa",
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed aut distinctio cupiditate.",
  guardado: true,
}
]
_librosGuardados: Libros[];

librosGuardados: BehaviorSubject<Libros[]> = new BehaviorSubject<Libros[]>([]);

constructor() { 
  this._librosGuardados = [];
  this.getLibrosGuardados();
}

  public getAll(): Libros[]{
    return this.libros;
  }
//llamar diferente a la funcion
  sacarLibro(libro: Libros){
    for(let i = 0; i < this.libros.length; i++){
        if(this.libros[i] == libro){
          if(this.libros[i].guardado == true)
            this.quitarLibroGuardado(this.libros[i]);
          this.libros[i].guardado = !this.libros[i].guardado; 
          break;
        }
    }
    this.getLibrosGuardados();
  }
    getLibrosGuardados(): void{
      for(let i = 0; i < this.libros.length; i++){
        if(this.libros[i].guardado == true && !this.isGuardado(this.libros[i])){
          this._librosGuardados.push(this.libros[i]);
        }
      }

      this.librosGuardados.next(this._librosGuardados);
    }

    isGuardado(libro: Libros): boolean{
        for(let i = 0; i < this._librosGuardados.length; i++){
          if(this._librosGuardados[i] == libro) 
            return true;
        }
        return false;
    }

    quitarLibroGuardado(libro: Libros): void{
      for(let i = 0; i < this._librosGuardados.length; i++){
          if(this._librosGuardados[i] == libro)
              this._librosGuardados.splice(i);
      }
    }
}
