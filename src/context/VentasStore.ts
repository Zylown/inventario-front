import { create } from "zustand";
import { VentasProps } from "../types/Ventas.types";

type StoreState = {
  ventas: VentasProps[];
  addVenta: (venta: VentasProps) => void;
  removeVenta: (numeroVentaProducto: number) => void; // Agregar función de eliminar
};

// aca creamos el store para las ventas que nos permitira agregar una venta a la lista de ventas
export const useVentasStore = create<StoreState>((set) => ({
  ventas: [],
  addVenta: (venta) =>
    set((state) => ({
      ventas: [...state.ventas, venta],
    })),
  removeVenta: (numeroProducto) =>
    set((state) => ({
      ventas: state.ventas.filter(
        (venta) => venta.numeroVentaProducto !== numeroProducto
      ),
    })),
}));
