<template>
  <header>
    <div>
      <a href="#" @click.prevent="changePage('Index')">
        <img src="../assets/header.jpg" alt="title"/>
      </a>
      <nav>
        <ul>
          <li><a href="#" @click.prevent="changePage('Catalog')">Каталог</a></li>
          <li><a href="#" @click.prevent="changePage('Promotions')">Акции</a></li>
          <li><a href="#" @click.prevent="changePage('Contacts')">Контакты</a></li>
        </ul>
      </nav>
    </div>
  </header>

</template>

<script>
export default {
  name: "Header",
  methods: {
    changePage: function (page) {
      this.$root.$emit("onChangePage", page);
    }
  }
}
</script>

<style scoped>

</style>
