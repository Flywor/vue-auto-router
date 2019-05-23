import Vue from 'vue'
import App from './App'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

const bootstrap = async () => {
  await store.dispatch('getMenuList')
  new Vue({
    router: require('./router').default,
    store,
    render: h => h(App)
  }).$mount('#app')
}

bootstrap()
