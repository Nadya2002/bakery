<template>
  <div class="catalog">
    <div class="one-product" v-for="product in products" :key="product.id">
      <div class="name">
        {{ product.name }}
      </div>
      <div class="body">
        {{ product.description }}
      </div>
      <div class="price">
        Цена за кг : {{ product.price }}
      </div>
      <div class="consist">
        Состав : {{ product.consist }}
      </div>
    </div>
    <img src="../../assets/napoleon.jpg" alt="napaleon" class="nap"/>
    <img src="../../assets/medovik.jpg" alt="med" class="med"/>
    <img src="../../assets/cheescake.jpg" alt="chees" class="chees"/>
  </div>

</template>

<script>
export default {
  name: "Catalog",
  props: ['products']
}
</script>

<style scoped>

</style>
