import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Chart from '@/page/chart/Chart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '',
          component: Chart
        }
      ]
    }
  ]
})
