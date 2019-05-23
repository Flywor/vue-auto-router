<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    width: 100%;
}
.layout-logo{
    display: inline-block;
    border-radius: 3px;
    font-size: 28px;
    color: #fff;
}
.layout-nav{
    margin: 0 auto;
    margin-right: 20px;
}
</style>
<template>
    <div class="layout">
        <Layout style="height: 100%;">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1" style="display: flex;">
                    <div style="flex: 1;">
                        <div class="layout-logo">我就是个演示项目哒！</div>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="home" :to="{ name: 'home' }">
                            <Icon type="ios-home"></Icon>
                            首页
                        </MenuItem>
                        <MenuItem v-for="item in firstMenu" :key="item.name" :to="{ name: item.name }" :name="item.name">
                            <Icon :type="item.icon"></Icon>
                            {{item.title}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}" v-if="secondMenu">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <template v-for="item in secondMenu" >
                            <Submenu name="1" v-if="item.children" :key="item.name">
                                <template slot="title">
                                    <Icon :type="item.meta.icon"></Icon>
                                    {{item.meta.title}}
                                </template>
                                <MenuItem v-for="child in (item.children || [])" :key="child.name" :name="child.name" :to="{ name: child.name }" >
                                    <Icon :type="child.meta.icon"></Icon>
                                    {{child.meta.title}}
                                </MenuItem>
                            </Submenu>
                            <MenuItem v-else :name="item.name" :to="{ name: item.name }" :key="item.name" >
                                <Icon :type="item.meta.icon"></Icon>
                                {{item.meta.title}}
                            </MenuItem>
                        </template>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    firstMenu () {
      return this.$store.state.menu.menuList
    },
    secondMenu () {
      return (this.$store.state.menu.menuList.find(m => m.name === this.$route.matched[0].name) || {}).children
    }
  }
}
</script>
