export interface InventarioProps {
  id: string;
  categoria: string;
  producto: string;
  marca: string;
  estado: string;
  stock: number;
  precioC: number;
  precioV: number;
}

export interface KardexProps {
  id: string;
  fecha: string;
  hora: string;
  producto: string;
  descripcion: string;
  agente: string;
  nombre: string;
  inicial: number;
  entrada: number;
  salida: number;
  final: number;
}

export interface VentasProps {
  num: string;
  producto: string;
  precio: number;
  cantidad: number;
  total: number;
}
