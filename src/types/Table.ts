export interface ITableProps {
  searchTerm: string;
  selectedField: string;
}

export interface KTableProps {
  fecha: Date;
  descripcion: string;
  documento: string;
  entradas: number;
  salidas: number;
  saldo: number;
  costoUnitario: number;
  costoTotal: number;
}
