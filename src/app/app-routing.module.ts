import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaParagonComponent } from './biblioteca-paragon/biblioteca-paragon.component';
import { BibliotecaPropiaComponent } from './biblioteca-propia/biblioteca-propia.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'biblioteca',
    pathMatch: 'full',
  },
  {
    path: 'biblioteca', component: BibliotecaParagonComponent
  },
  {
    path: 'miBiblioteca', component: BibliotecaPropiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
