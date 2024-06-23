export type FormDatosProps = {
  idProducto: number;
  nombreProducto: string;
  precioProducto: string;
  cantidadProducto: number;
};

export interface VentasProps {
  numeroProducto: number;
  nombreProducto: string;
  precioProducto: number;
  cantidadProducto: number;
  total: number;
}
