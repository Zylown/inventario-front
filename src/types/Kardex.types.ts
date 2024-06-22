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

export interface FilterKardexProps {
  searchDate: string;
  setSearchDate?: (date: string) => void;
}
