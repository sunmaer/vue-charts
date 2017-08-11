import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Egraph from '@/page/chart/Egraph'
import Jgraph from '@/page/chart/Jgraph'
import D3graph from '@/page/chart/D3graph'

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
          component: D3graph
        },
        {
          path: 'egraph',
          component: Egraph
        },
        {
          path: 'jgraph',
          component: Jgraph
        },
        {
          path: 'd3graph',
          component: D3graph
        }
      ]
    }
  ]
})
