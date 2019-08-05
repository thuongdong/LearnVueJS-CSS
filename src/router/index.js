import Vue from 'vue'
import Router from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
import UserList from '@/components/UserList'
import UserDetail from '@/components/UserDetail'
import UserEdit from '@/components/UserEdit'
import CreateUser from '@/components/CreateUser'
import Login from '@/components/Login'
import VuePaginate from 'vue-paginate'

Vue.use(VuePaginate)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
        redirect: {
            name: 'login'
        }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'user-list',
      component: UserList
    },
    {
      path: '/users/:id',
      name: 'user-detail',
      component: UserDetail
    },
    {
      path: '/users/:id/edit',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/users-create',
      name: 'user-create',
      component: CreateUser
    }
  ]
})
