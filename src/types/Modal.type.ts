export type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  initialData: InventarioProps;
  onEdit: (data: InventarioProps) => void;
};

export type InventarioProps = {
  id: string;
  categoria: string;
  producto: string;
  marca: string;
  estado: string;
  stock: number;
  precioC: number;
  precioV: number;
};
