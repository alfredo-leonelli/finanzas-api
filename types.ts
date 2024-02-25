export enum MESES {
  ENE = "Enero",
  FEB = "Febrero",
  MAR = "Marzo",
  ABR = "Abril",
  MAY = "Mayo",
  JUN = "Junio",
  JUL = "Julio",
  AGO = "Agosto",
  SEP = "Septiembre",
  OCT = "Octubre",
  NOV = "Noviembre",
  DIC = "Diciembre",
}

export enum CATEGORIAS {
  ING = "Ingreso",
  EGR = "Egreso",
}

export enum TIPOS_ING {
  SUL = "Sueldo",
  DEV = "Devolución",
}

export enum TIPOS_EGR {
  COM = "Comida",
  ROP = "Ropa",
  TRA = "Transporte",
  SAL = "Salud",
  ENT = "Entretenimiento",
  ELE = "Electrónicos",
  AHO = "Ahorro",
  CUE = "Cuentas",
  OTRO = "Otro",
}
export interface ENTRADA {
  categoria: CATEGORIAS;
  tipo: TIPOS_ING | TIPOS_EGR;
  monto: number;
}

export interface USUARIO {
  username: string;
  password: string;
}

export interface MES {
  usuario: string;
  mes: MESES;
  ano: number;
  registros: Array<ENTRADA>;
}
