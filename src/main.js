import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


import './assets/style/reset.css' //解决手机默认样式不同的问题
import './assets/style/border.css' // 解决1像素边框问题
import './assets/style/iconfont.css'

//300ms延迟问题 fastclick 库

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
