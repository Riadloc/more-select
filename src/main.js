import Vue from 'vue'
import App from './App.vue'

import MoreSelect from '../dist/more-select.min.js'
import '../dist/style.min.css'
Vue.use(MoreSelect)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
