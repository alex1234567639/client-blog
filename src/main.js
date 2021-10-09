import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// tailwind css
import '@/assets/css/style.css'

// 彈窗
import Popup from './components/Popup'
Vue.use(Popup)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
