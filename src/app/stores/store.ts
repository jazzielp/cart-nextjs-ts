import { create } from "zustand";
import { Product } from "../interfaces/interface";

interface Store {
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  cart: Product[];
  setCart: (products: Product[]) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  bestCombination: Product[];
  setBestCombination: (products: Product[]) => void;
}

export const useStore = create<Store>((set) => ({
  isCartOpen: false,
  setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  cart: [],
  setCart: (products) => set({ cart: products }),
  products: [],
  setProducts: (products) => set({ products: products }),
  bestCombination: [],
  setBestCombination: (products) => set({ bestCombination: products }),
}));
