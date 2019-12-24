import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(messagePlugin)

firebase.initializeApp({
  apiKey: 'AIzaSyCJbQJImnbugv6ME5gDYDt9q5FClMe2-_g',
  authDomain: 'myvue-1993d.firebaseapp.com',
  databaseURL: 'https://myvue-1993d.firebaseio.com',
  projectId: 'myvue-1993d',
  storageBucket: 'myvue-1993d.appspot.com',
  messagingSenderId: '990451553681',
  appId: '1:990451553681:web:1dfeee0d60811576eaf630'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
