import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style
// import 'swiper/css/swiper.css'

// Vue.use(VueAwesomeSwiper);

import Carousel3d from 'vue-carousel-3d';
 
Vue.use(Carousel3d);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
