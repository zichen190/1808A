import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Manage from '@/components/manage'
import userList from '@/components/userList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      children:[
        {
          path: '/userList',
          name: 'userList',
          component: userList,
        }
      ]
    }
  ]
})
