import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Test from '@/components/test'
import Currencies from '@/components/coins/overview'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/currencies/:symbol',
      name:'currencies',
      component: Currencies
    },
	{
		path: '/test',
		name: 'test',
		component: Test
		}
  ]
})
