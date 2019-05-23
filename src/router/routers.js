import Layout from '../views/layout'
import store from '../store'

const menuList = store.state.menu.menuList
const recursion = (list, basePath = '') => {
  const menus = []
  list.map(({ name, title, icon, children }) => {
    const path = `${basePath}/${name}`
    const child = {
      path,
      name,
      meta: {
        title,
        icon
      }
    }
    if (children) {
      child.children = recursion(children, path)
      child.redirect = child.children[0].path
      if (basePath === '') {
        child.component = Layout
      } else {
        child.component = (resolve) => {
          require([`../views${path}`], resolve)
        }
      }
    } else {
      child.component = (resolve) => {
        require([`../views${path}`], resolve)
      }
    }
    menus.push(child)
  })
  return menus
}
const routers = recursion(menuList)

export default [{
  path: '/login',
  name: 'login',
  component: () => import('../views/login')
}, {
  path: '/',
  redirect: '/home',
  component: Layout,
  children: [{
    path: 'home',
    name: 'home',
    component: () => import('../views/home')
  }]
},
...routers,
{
  path: '/',
  name: 'error',
  redirect: '/404',
  component: Layout,
  children: [{
    path: '403',
    name: '403',
    component: () => import('../views/error-page/403')
  }, {
    path: '*',
    name: '404',
    component: () => import('../views/error-page/404')
  }]
}]
