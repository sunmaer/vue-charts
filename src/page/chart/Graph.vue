<template>
  <div>
    <div id="graph" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      nodes: {
        type: Array,
        default () {
          return []
        }
      },
      links: {
        type: Array,
        default () {
          return []
        }
      }
    },
    methods: {
      /* 获取节点 */
      getNodes () {
        let nodeList = []
        this.nodes.forEach(function (value, index, arr) {
          let node = {
            name: value.id,
            value: value.name
          }
          nodeList.push(node)
        })
        return nodeList
      },
      /* 获取边 */
      getLinks () {
        let linkList = []
        this.links.forEach(function (value, index, arr) {
          
        })
      },
      /* 绘制图表 */
      render () {
        // 初始化 Echarts 实例
        let myChart = this.$echarts.init(document.getElementById('graph'))

        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '标题',
            top: '20'
          },
          series: [ // 系列列表
            {
              type: 'graph',
              layout: 'force',
              force: { // 力引导布局
                initLayout: 'circular',
                repulsion: 200,
                edgeLength: [100, 200], // 力引导布局中根据 links 的 value 值映射到边的长度
                layoutAnimation: false
              },
              roam: true,
              // symbol: 'circle', // 关系图节点标记的图形
              symbol: 'image://http://img15.3lian.com/2015/a1/16/d/202.jpg',
              symbolSize: [60, 40],
              itemStyle: { // 图形样式
                normal: {
                  color: 'rgb(18, 150, 219)'
                  // barBorderRadius: 50
                }
              },
              lineStyle: { // 关系边样式
                normal: {
                  color: 'gray',
                  opacity: 0.9,
                  width: 1,
                  curveness: 0
                }
              },
              label: { // 图形上的文本标签
                normal: {
                  show: true,
                  position: 'bottom',
                  textStyle: {
                    color: 'gray'
                  },
                  formatter: (params) => {
                    return params.value
                  }
                }
              },
              data: this.nodes,
              links: this.links
            }
          ]
        }

        // 使用指定的配置项和数据绘制图表
        myChart.setOption(option)
      }
    },
    mounted () {
      this.render()
    }
  }
</script>

<style scoped>

</style>
