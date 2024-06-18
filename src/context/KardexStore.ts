import dataKardex from "../dataKardex.json";
import { create } from "zustand";
import { KardexProps } from "../types/Table";

type StoreState = {
  kardex: KardexProps[];
  //   addKardex: (kardex: KardexProps) => void;
  //   editKardex: (kardex: KardexProps) => void;
};

export const useKardexStore = create<StoreState>(() => ({
  kardex: dataKardex,
}));
