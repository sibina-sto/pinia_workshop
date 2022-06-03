<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useProductStore } from "@/stores/ProductStore";
import { useCartStore } from "@/stores/CartStore";
const productStore = useProductStore();
const { addItem } = useCartStore();
const cartStore = useCartStore();
cartStore.$onAction(({ name, after }) => {
  if (name !== "addItem") return;
  after((count) => alert(`You've added ${count} items to the cart`));
});

productStore.fill();
</script>

<template>
  <div class="container">
    <TheHeader />
    <AppButton @click="cartStore.undo">Undo</AppButton>
    <AppButton @click="cartStore.redo">Redo</AppButton>
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.id"
        :product="product"
        @add-to-cart="addItem(product.id, $event)"
      />
    </ul>
  </div>
</template>
