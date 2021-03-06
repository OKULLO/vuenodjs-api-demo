import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
