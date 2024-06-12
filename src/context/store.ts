import { create } from "zustand";

// Definimos los tipos de datos que se van a utilizar
type Product = {
  categoria: string;
  producto: string;
  marca: string;
  estado: string;
  stock: number;
  precioC: number;
  precioV: number;
};

// Definimos el estado de la aplicación y las funciones que se van a utilizar
type StoreState = {
  products: Product[];
  addProduct: (product: Product) => void;
};

// Creamos el store con Zustand y definimos el estado inicial
export const useStore = create<StoreState>((init) => ({
  products: [], // sirve para almacenar los productos
  addProduct: (product) =>
    init((state) => ({
      products: [...state.products, product], // sirve para agregar un nuevo producto al estado de productos
    })),
}));
