<template>
  <div>
    <div id="graph" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nodes: [
          {
            name: 'node1'
          },
          {
            name: 'node2'
          },
          {
            name: 'node3'
          },
          {
            name: 'node4'
          },
          {
            name: 'node5'
          },
          {
            name: 'node6'
          },
          {
            name: 'node7'
          },
          {
            name: 'node8'
          },
          {
            name: 'node9'
          },
          {
            name: 'node10'
          },
          {
            name: 'node11'
          },
          {
            name: 'node12'
          },
          {
            name: 'node13'
          },
          {
            name: 'node14'
          },
          {
            name: 'node15'
          }
        ],
        links: [
          {
            source: 'node1',
            target: 'node2',
            value: 100
          },
          {
            source: 'node1',
            target: 'node3',
            value: 200
          },
          {
            source: 'node1',
            target: 'node4',
            value: 300
          },
          {
            source: 'node1',
            target: 'node5',
            value: 400
          },
          {
            source: 'node1',
            target: 'node6',
            value: 500
          },
          {
            source: 'node1',
            target: 'node7',
            value: 100
          },
          {
            source: 'node1',
            target: 'node8',
            value: 200
          },
          {
            source: 'node1',
            target: 'node9',
            value: 300
          },
          {
            source: 'node1',
            target: 'node10',
            value: 400
          },
          {
            source: 'node1',
            target: 'node11',
            value: 500
          },
          {
            source: 'node1',
            target: 'node12',
            value: 100
          },
          {
            source: 'node1',
            target: 'node13',
            value: 200
          },
          {
            source: 'node1',
            target: 'node14',
            value: 300
          },
          {
            source: 'node1',
            target: 'node15',
            value: 400
          }
        ]
      }
    },
    methods: {
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
              hoverAnimation: false,
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
                  color: 'rgb(18, 150, 219)',
                  borderColor: 'rgb(192, 0, 0)'
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
                    return params.name
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
