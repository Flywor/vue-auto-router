import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

router.afterEach(to => {
  window.document.title = to.meta.title
  window.scrollTo(0, 0)
})

export default router
