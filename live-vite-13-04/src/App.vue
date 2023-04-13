<script>
import products from "./data/products.js";
export default {
  data() {
    return {
      products: products,
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="product in products">
        <div class="product">
          <img :src="product.src" :alt="product.title">
          {{ product.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
