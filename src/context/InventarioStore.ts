import { create } from "zustand";
import data from "../dataInventario.json";
import { InventarioProps } from "../types/Inventario.types";

// Definimos el estado de la aplicación y las funciones que se van a utilizar
type StoreState = {
  products: InventarioProps[];
  addProduct: (product: InventarioProps) => void;
  editProduct: (product: InventarioProps) => void;
};

// Creamos el store con Zustand y definimos el estado inicial
export const useInventarioStore = create<StoreState>((set) => ({
  products: data, // Inicializa con los datos del archivo JSON
  addProduct: (product) =>
    set((state) => ({
      products: [...state.products, product], // 1ro copia los productos actuales y luego añade el nuevo producto
    })),
  editProduct: (editProduct) =>
    set((state) => {
      console.log("Data to edit:", editProduct);
      console.log("Products in store (before edit):", state.products); // Verificar los productos antes de editar

      // Usamos map para crear una nueva lista de productos con el producto editado
      const updatedProducts = state.products.map((p) => {
        console.log("Comparing IDs:", p.id, editProduct.id);
        if (String(p.id) === String(editProduct.id)) {
          // Convertir ambos a cadena para una comparación consistente
          console.log("1er id:", p.id);
          console.log("2do id:", editProduct.id);
          return editProduct;
        }
        return p;
      });
      console.log("Updated products in store:", updatedProducts); // Añadir log para verificar los productos actualizados
      return {
        products: updatedProducts,
      };
    }),
}));
