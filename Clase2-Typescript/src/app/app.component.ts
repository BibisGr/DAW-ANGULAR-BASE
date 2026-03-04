import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TypeScriptComponent} from './componentes/type-script/type-script.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TypeScriptComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase2-Typescript';
}
