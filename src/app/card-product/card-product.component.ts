import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LibrosDataService } from '../libros-data.service';
import { Libros } from '../lista-libros/Libros';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {

  constructor(private estanteria: LibrosDataService){}

  @Input() libro!: Libros;
  
  @Output() libroChange: EventEmitter<Libros> = new EventEmitter<Libros>();

    sacarLibro(libro: Libros): void {
        this.estanteria.sacarLibro(libro);
    }

}
