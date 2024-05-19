
import vueRouter from 'vue-router'
const routes = [{
  path: '/',
  redirect: '/home'
},{
  name: 'home',
  path: '/home',
  component: () => import('../view/home.vue'),
  children: [
    {
      name: 'appVue',
      path: '/app-vue',
      component: () => import('../view/app-vue.vue')
    },
    {
      name: 'appReact',
      path: '/react-micro',
      component: () => import('../view/app-react.vue')
    }
  ]
}]

export default new vueRouter({
  mode: 'history',
  routes
})
