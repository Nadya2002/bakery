<template>
  <div class="middle">
    <main>
      <Index v-if="page === 'Index'"/>
      <Contacts v-if="page === 'Contacts'"/>
      <Catalog :products=products v-if="page === 'Catalog'"/>
      <Promotions v-if="page === 'Promotions'"/>
      <template v-if="productId">
        <Product :productId="productId"
              :product="Object.values(this.products).filter(p => p.id === productId)[0]"
              v-if="page === 'Product'"/>
      </template>
    </main>
  </div>
</template>

<script>
import Index from "./page/Index";
import Contacts from "./page/Contacts";
import Catalog from "./page/Catalog";
import Promotions from "./page/Promotions";
import Product from "./page/Product";

export default {
  name: "Middle",
  data: function () {
    return {
      page: "Index"
    }
  },
  components: {
    Product,
    Promotions,
    Catalog,
    Contacts,
    Index
  },
  props: ["products", "productId"],
  beforeCreate() {
    this.$root.$on("onChangePage", (page) => this.page = page)
  }
}
</script>

<style scoped>

</style>
