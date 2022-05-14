<template>
  <div>
    <div class="name">
      {{ product.name }}
    </div>
    <div class="body">
      {{ product.description }}
    </div>
    <div class="price">
      {{ product.price }}
    </div>
    <div class="consist">
      {{ product.consist }}
    </div>
    <div class="footer">
      <a href="#">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
}
</script>

<style scoped>

</style>
