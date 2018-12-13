import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/functions/rem'
import './index.less'
import '@/components'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
