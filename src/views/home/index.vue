<template>
  <Alert type="success">
      构建说明
      <template slot="desc">
        <div style="font-size: 24px;line-height: 35px;">
          <p>本例一级菜单渲染在顶部，二级和三级菜单在左边（如果有的话），配合iview-admin使用效果更佳。</p>
          <p>本例的动态路由，其实是在main.js入口渲染之前先一步请求到菜单数据，存到vuex里面，然后再通过require进行路由注册，注册的时候根据菜单数据来组织路由结构，至此程序初始化完成，后续使用路由数据可以通过'/router/routers.js拿到，菜单数据可以通过$store.state.menu.menulist拿到。</p>
          <p>路由的最终组织结构自行打开控制台查看。</p>
        </div>
      </template>
  </Alert>
</template>
<script>
import routers from '../../router/routers'
export default {
  name: 'home',
  data () {
    return {
    }
  },
  mounted () {
    console.log('组织好的路由数据如下所示')
    console.table(routers)
  }
}
</script>
<style scoped lang="less">
</style>
