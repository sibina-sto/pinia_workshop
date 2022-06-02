import { defineStore } from "pinia";
import type { Product } from "@/types";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: [] as Product[],
    };
  },
  getters: {
    count: (state) => state.products.length,
    doubleCount: (state) => state.count * 2,
    productById(state) {
      return function (id: string) {
        return state.products.find((product) => product.id === id);
      };
    },
  },
  actions: {
    async fill() {
      const res = await fetch("/products.json");
      this.products = await res.json();
    },
  },
});
