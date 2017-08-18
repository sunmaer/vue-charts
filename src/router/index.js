import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import TreeGraph from '@/page/chart/TreeGraph'
import FlowGraph from '@/page/chart/FlowGraph'
import OrgGraph from '@/page/chart/OrgGraph'
import NetGraph from '@/page/chart/NetGraph'

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
          component: OrgGraph
        },
        {
          path: 'treeGraph',
          component: TreeGraph
        },
        {
          path: 'flowGraph',
          component: FlowGraph
        },
        {
          path: 'orgGraph',
          component: OrgGraph
        },
        {
          path: 'netGraph',
          component: NetGraph
        }
      ]
    }
  ]
})
