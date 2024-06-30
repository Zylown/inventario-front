import { create } from "zustand";
import { InventarioProps } from "../types/Inventario.types";
import { getInventario } from "../api/fetchInventario";

type StoreState = {
  products: InventarioProps[];
  setProducts: (products: InventarioProps[]) => void;
  addProduct: (product: InventarioProps) => void;
  editProduct: (product: InventarioProps) => void;
};

export const useInventarioStore = create<StoreState>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
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
      return { products: updatedProducts };
    }),
}));

// Inicializa la tienda de manera asíncrona
const initializeStore = async () => {
  try {
    const initialData: InventarioProps[] = await getInventario();
    const { setProducts } = useInventarioStore.getState();
    setProducts(initialData);
  } catch (error) {
    console.error("Failed to initialize store:", error);
  }
};

initializeStore();
