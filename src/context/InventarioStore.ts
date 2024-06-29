import { create } from "zustand";
// import data from "../dataInventario.json";
import { InventarioProps } from "../types/Inventario.types";
import { getInventario } from "../api/fetchInventario";

// Definimos el estado de la aplicación y las funciones que se van a utilizar
type StoreState = {
  products: InventarioProps[];
  addProduct: (product: InventarioProps) => void;
  editProduct: (product: InventarioProps) => void;
};

const initializeStore = async () => {
  const initialData: InventarioProps[] = await getInventario();

  return create<StoreState>((set) => ({
    products: initialData,
    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
      })),
    editProduct: (editProduct) =>
      set((state) => {
        const updatedProducts = state.products.map((p) => {
          if (String(p.id) === String(editProduct.id)) {
            return editProduct;
          }
          return p;
        });
        return {
          products: updatedProducts,
        };
      }),
  }));
};

export const useInventarioStore = await initializeStore();
