import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './artista/artista.component';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponent } from './home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'main', component: MainComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'artista/:id', component: ArtistaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
