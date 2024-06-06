export interface ITableProps {
  searchTerm: string;
  selectedField: string;
}

export type inventario = {
  id: string;
  categoria: string;
  producto: string;
  marca: string;
  estado: string;
  stock: number;
  precioC: number;
  precioV: number;
};
