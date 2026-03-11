import { Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {PageNotFoundComponent} from './componentes/page-not-found/page-not-found.component';
import {PersonajesComponent} from './componentes/personajes/personajes.component';
import {PersonajeComponent} from './componentes/personaje/personaje.component';
import {AboutUsComponent} from './componentes/about-us/about-us.component';

export const routes: Routes = [
  //Ruta por default
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  //Rutas asociadas a componentes
  { path: 'home', component: HomeComponent},
  { path: 'personajes', component: PersonajesComponent},
  { path: 'personaje', component: PersonajeComponent},
  { path: 'about', component: AboutUsComponent},
  // Ruta de redirect o redireccion
  { path: '**', component: PageNotFoundComponent, pathMatch:'full'}
];
