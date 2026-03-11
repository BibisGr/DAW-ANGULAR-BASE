export interface Personaje {
  id: number;
  nombre_civil: string;
  nombre_guerrera: string;
  cuerpo_celeste_de_Origen: string;
  edad: number;
  personalidad:string[];
  habilidades: Habilidad[];
  poderes: string[];
  armas:Arma[];
  transformaciones: string[];
  aliados: string[];
  enemigos:string[];
  estado:boolean;
  url_image: string;
}

export interface Habilidad{
  name: string;
  ataque: number;
  efectividad: number;
}

export interface Arma{
  name: string;
  ataque: number;
  efectividad: number;
}
