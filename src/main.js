import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueHighlightJS from 'vue-highlightjs'

Vue.use(Vuetify)
Vue.use(VueHighlightJS)

new Vue({
  el: '#app',
  render: h => h(App)
})
