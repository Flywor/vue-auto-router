import { getMenuList } from '../../api'

export default {
  state: {
    menuList: []
  },
  mutations: {
    setMenu (state, menuList) {
      state.menuList = menuList
    }
  },
  actions: {
    async getMenuList ({ commit }) {
      try {
        const menuList = await getMenuList()
        commit('setMenu', menuList)
        return true
      } catch (e) {
        return false
      }
    }
  }
}
