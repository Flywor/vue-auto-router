# vue-auto-router
vue动态路由实例

## Develop
```
npm install
npm run dev
```


## 说明

> 本例一级菜单渲染在顶部，二级和三级菜单在左边（如果有的话），配合iview-admin使用效果更佳。
> 本例的动态路由，其实是在main.js入口渲染之前先一步请求到菜单数据，存到vuex里面，然后再通过require进行路由注册，注册的时候根据菜单数据来组织路由结构，至此程序初始化完成，后续使用路由数据可以通过```/router/routers.js```拿到，菜单数据可以通过```$store.state.menu.menulist```拿到。
> 路由的最终组织结构自行打开控制台查看。
