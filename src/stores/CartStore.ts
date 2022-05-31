import { defineStore } from "pinia";
import items from "@/data/cart.json";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: items,
    };
  },
});
