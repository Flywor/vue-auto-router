export const getMenuList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([{
        name: 'nest',
        title: '这里有嵌套',
        icon: 'md-cog',
        children: [{
          name: 'iview-card',
          title: '这是一个Card',
          icon: 'ios-contacts',
          children: [{
            name: 'iview-tree',
            title: '这是Card里面的tree',
            icon: 'ios-contacts'
          }]
        }]
      }, {
        name: 'demo',
        title: '我是一个demo',
        icon: 'md-albums',
        children: [{
          name: 'iview-collapse',
          title: '我是collapse实例',
          icon: 'md-albums'
        }]
      }, {
        name: 'components',
        title: '组件',
        icon: 'md-albums',
        children: [{
          name: 'iview-form',
          title: 'iview的表单',
          icon: 'md-albums'
        }]
      }])
    }, 1500)
  })
}
