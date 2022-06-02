import { defineStore } from "pinia";
import type { CartItem } from "@/types";
import { useProductStore } from "./ProductStore";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [] as CartItem[],
    };
  },
  getters: {
    count: (state) => {
      return state.items.reduce((p, item) => item.count + p, 0);
    },
    isEmpty(): boolean {
      return this.count === 0;
    },
    total: (state) => {
      const productStore = useProductStore();
      return state.items.reduce((p, item) => {
        const product = productStore.productById(item.id);
        return product?.price ? product.price * item.count + p : p;
      }, 0);
    },
  },
  actions: {
    addItem(itemId: string, count: number) {
      const item = this.items.find((item) => item.id === itemId);
      if (item) {
        item.count += count;
      } else {
        this.items.push({ id: itemId, count });
      }
    },
  },
});
