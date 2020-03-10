import Vue from "vue";
import App from "./App.vue";

import "./app.scss";

// Ensure you are using css-loader
// import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
