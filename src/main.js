import Vue from 'vue'
import App from './App.vue'
// added bootstrap imports 
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// added font awesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(BootstrapVue);
// add font awesome declarations
library.add(faSignInAlt, faSignOutAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
