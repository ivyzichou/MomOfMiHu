import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import componentsTransWays from '@/components/componentsTransWays'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: 'componentsTransWays',
      name: 'componentsTransWays',
      component: componentsTransWays
    }
  ]
})
