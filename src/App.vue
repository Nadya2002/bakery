<template>
  <div id="app">
    <Header/>
    <Middle :products="products"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Middle,
    Header
  },
  data: function () {
    return this.$root.$data;
  }
}
</script>

<style>
#app {

}
</style>
