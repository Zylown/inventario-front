export interface ITableProps {
  searchTerm: string;
  selectedField: string;
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

// export type InventarioProps = {
//   id: string;
//   categoria: string;
//   producto: string;
//   marca: string;
//   estado: string;
//   stock: number;
//   precioC: number;
//   precioV: number;
// };
