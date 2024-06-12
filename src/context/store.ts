import { create } from "zustand";
import data from "../data.json";
import { ModalAddData } from "../types/Modal.type";

// Definimos el estado de la aplicación y las funciones que se van a utilizar
type StoreState = {
  products: ModalAddData[];
  addProduct: (product: ModalAddData) => void;
};

// Creamos el store con Zustand y definimos el estado inicial
export const useStore = create<StoreState>((init) => ({
  products: data, // Inicializa con los datos del archivo JSON
  addProduct: (product) =>
    init((state) => ({
      products: [...state.products, product], // Agrega un nuevo producto al estado de productos
    })),
}));
