import { create } from "zustand";
import { KardexProps } from "../types/Kardex.types";
import { getKardex } from "../api/fetchKardex";

type StoreState = {
  kardex: KardexProps[];
  setKardex: (kardex: KardexProps[]) => void;
  addKardex: (kardex: KardexProps) => void;
  //   editKardex: (kardex: KardexProps) => void;
};

//set sirve para actualizar el estado de kardex y mostrarlo en la tabla
export const useKardexStore = create<StoreState>((set) => ({
  kardex: [],
  setKardex: (kardex) => set({ kardex }), // esto sirve para actualizar el estado de kardex y mostrarlo en la tabla
  addKardex: (kardex) =>
    set((state) => ({ kardex: [...state.kardex, kardex] })), // esto sirve para agregar un nuevo kardex a la tabla
}));

// Inicializa la tienda de manera asíncrona
const initializeStore = async () => {
  try {
    const initialData: KardexProps[] = await getKardex();
    const { setKardex } = useKardexStore.getState();
    setKardex(initialData);
  } catch (error) {
    console.error("Failed to initialize store:", error);
  }
};

initializeStore();
