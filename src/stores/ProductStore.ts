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
    productByName(state) {
      return function (name) {
        return state.products.find((product) => product.name === name);
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
