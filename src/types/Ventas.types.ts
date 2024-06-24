export type FormDatosProps = {
  idProducto: number;
  nombreProducto: string;
  precioProducto: string;
  cantidadProducto: number;
};

export interface VentasProps {
  nombreCliente?: string;
  numeroVentaProducto: number;
  nombreVentaProducto: string;
  precioVentaProducto: number;
  cantidadVentaProducto: number;
  total: number;
  // pagoTotal: number;
}

export interface DocPrintProps {
  handleCloseModal?: () => void;
}
