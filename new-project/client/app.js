import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import { sync } from 'vuex-router-sync'
import App from './components/App'
import router from './router'
import store from './store'

sync(store, router)
Vue.use(VueMaterial)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
