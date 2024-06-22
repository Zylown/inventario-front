export type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  initialData?: InventarioProps;
  onEdit?: (data: InventarioProps) => void;
  onAdd?: (data: InventarioProps) => void;
};

export interface FilterInventarioProps {
  searchTerm: string;
  setSearchTerm?: (term: string) => void;
  selectedField: string;
  setSelectedField?: (field: string) => void;
}

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
