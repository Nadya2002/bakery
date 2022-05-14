import Vue from 'vue'
import App from './App.vue'
import data from "./data.js";
import "../src/css/style.css"
Vue.config.productionTip = false

new Vue({
  data: function () {
    return data;
  },
  render: h => h(App),
}).$mount('#app')
