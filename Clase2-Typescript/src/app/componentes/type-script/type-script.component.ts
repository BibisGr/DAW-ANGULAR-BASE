import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-type-script',
  imports: [],
  templateUrl: './type-script.component.html',
  styleUrl: './type-script.component.css'
})
export class TypeScriptComponent implements OnInit {
  nombre: string = 'Bertha';
  nombreSegundo: string = 'true';
  edad: number = 36;
  mayorEdad: boolean = true;
  notas = [2,2,2,2,2];
  nota_final = 0;

  variable2!: null
  variable3: any

  frutas = [
    'uvas', 'fresas', 'banana', 'kiwi'
  ]

  fruta = {
    nombre: 'Uva',
    pesoGramos: 6,
    color: ['morado', 'verde', 'roja'],
    caducada: true,
    sabor: ['amargo', 'acido', 'dulce']
  }

  constructor() {
    this.nombre = 'Alvaro';
    this.fruta ={
      nombre: 'Frambuesa',
      pesoGramos: 10,
      color: ['rojo', 'granate'],
      caducada: false,
      sabor: [ 'acido', 'dulce']
    }
  }

  ngOnInit(): void {
    this.nombre = 'Oliver';
  }

  VenderONoVender(){
    if (this.fruta.caducada){
      return 'No Vender'
    }
    else {
      return 'Vender';
    }
  }

  notaFinalPromedio(notas: number[]){
    this.nota_final = 0;
    for (let i =0; i <notas.length; i++){
      this.nota_final += notas[i];
    }
    return this.nota_final / notas.length;
  }



  // si tipo empieza en mayúsculas se refiere a la clase
  // si tipo empienza en minúsculas se refiere al tipo de dato
}
