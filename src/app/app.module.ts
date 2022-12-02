import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { BibliotecaPropiaComponent } from './biblioteca-propia/biblioteca-propia.component';
import { BibliotecaParagonComponent } from './biblioteca-paragon/biblioteca-paragon.component';
import { EstanteriaPropiaComponent } from './estanteria-propia/estanteria-propia.component';
import { CardProductComponent } from './card-product/card-product.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    BibliotecaPropiaComponent,
    BibliotecaParagonComponent,
    EstanteriaPropiaComponent,
    CardProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
