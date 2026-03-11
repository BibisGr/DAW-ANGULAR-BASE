import { Component } from '@angular/core';
import {Arma, Habilidad, Personaje} from '../../common/personaje';

@Component({
  selector: 'app-personaje',
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  sailorMoon!: Personaje
  constructor() {
    this.sailorMoon = {
      id : 1,
      nombre_civil : 'Usagi Stukino',
      nombre_guerrera: 'Sailor Moon',
      cuerpo_celeste_de_Origen: 'Luna',
      edad : 16,
      personalidad:[
        'Alegre', 'Juguetona', 'Infantil', 'Llorona'
      ],
      habilidades: [
        {
          name: 'Poder Magico',
          ataque: 1000,
          efectividad: 5,
        },
        {
          name: 'Transformacion',
          ataque: 0,
          efectividad: 2,
        },
      ],
      poderes: [
        'transformacion', 'poder del cetro', 'lanzamiento de tiara lunar'
      ],
      armas:[
        {
          name: 'Cristal de Plata',
          ataque: 3000,
          efectividad: 5,
        },
        {
          name: 'Tiara Lunar',
          ataque: 1000,
          efectividad: 3,
        },
        {
          name: 'Cetro Lunar',
          ataque: 1000,
          efectividad: 4,
        },
        ],
      transformaciones: [
        'Sailor Moon', 'Super Sailor Moon', 'Sailor Moon R', 'Princesa Serenity'
        ],
      aliados: [
        'Sailor Scouts', 'Sailor Sartlight', 'Tuxedo Mask'
      ],
      enemigos:[
        'villanos'
      ],
      estado: true,
      url_image: 'https://m.media-amazon.com/images/I/71GaxUnnb9L.jpg'
    }
  }

}
