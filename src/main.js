// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import jsPlumb from 'jsplumb'
import * as d3 from 'd3'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb
Vue.prototype.$d3 = d3
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
