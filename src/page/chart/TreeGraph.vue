<template>
  <div>
    <div id="main" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nodes: [
          {
            name: 'node1',
            depth: 1,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node2',
            depth: 2,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node3',
            depth: 2,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node4',
            depth: 3,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node5',
            depth: 3,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node6',
            depth: 3,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node7',
            depth: 3,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node8',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node9',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node10',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node11',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node12',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node13',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node14',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          },
          {
            name: 'node15',
            depth: 4,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460'
          }
        ],
        links: [
          {
            source: 'node1',
            target: 'node2'
          },
          {
            source: 'node1',
            target: 'node3'
          },
          {
            source: 'node2',
            target: 'node4'
          },
          {
            source: 'node2',
            target: 'node5'
          },
          {
            source: 'node3',
            target: 'node6'
          },
          {
            source: 'node3',
            target: 'node7'
          },
          {
            source: 'node4',
            target: 'node8'
          },
          {
            source: 'node4',
            target: 'node9'
          },
          {
            source: 'node4',
            target: 'node10'
          },
          {
            source: 'node5',
            target: 'node10'
          },
          {
            source: 'node5',
            target: 'node11'
          },
          {
            source: 'node6',
            target: 'node12'
          },
          {
            source: 'node6',
            target: 'node13'
          },
          {
            source: 'node6',
            target: 'node14'
          },
          {
            source: 'node7',
            target: 'node14'
          },
          {
            source: 'node7',
            target: 'node15'
          }
        ]
      }
    },
    methods: {
      /* 获取层数 */
      getDepth (nodeList) {
        let constMaxDepth = 0
        nodeList.forEach((value, index, arr) => {
          constMaxDepth = value.depth > constMaxDepth ? value.depth : constMaxDepth
        })
        return constMaxDepth
      },
      /* 获取每层节点数 */
      getDepthNodes (nodeList) {
        let constMaxDepth = this.getDepth(nodeList)
        let array = new Array(constMaxDepth)
        for (let i = 0; i < constMaxDepth; i++) { // 初始化数组
          array[i] = 0
        }
        nodeList.forEach((value, index, arr) => {
          array[value.depth - 1]++
        })
        return array
      },
      /* 获取每层节点内部顺序 */
      getNodeIndex (nodeList, index) {
        let array = this.getDepthNodes(nodeList)
        let count = 0
        let i = 0
        while (index > count) {
          count += array[i]
          i++
        }
        count -= array[i - 1]
        return index - count
      },
      /* 获取节点 X 坐标 */
      getX (DomWidth, arr, node, index) {
        return DomWidth / (arr[node.depth - 1] + 1) * this.getNodeIndex(this.nodes, index + 1)
      },
      /* 获取节点 Y 坐标 */
      getY (DomHeight, constMaxDepth, node) {
        return DomHeight / (constMaxDepth + 1) * node.depth
      },
      /* 绘制图表 */
      render () {
        // 初始化 Echarts 实例
        let myChart = this.$echarts.init(document.getElementById('main'))

        let nodeList = [] // 节点
        let width = document.getElementById('main').offsetWidth // 获取 DOM 宽度
        let height = document.getElementById('main').offsetHeight // 获取 DOM 高度
        let constMaxDepth = this.getDepth(this.nodes) // 获取节点层数
        let array = this.getDepthNodes(this.nodes) // 获取每层节点数
        this.nodes.forEach((value, index, arr) => {
          let node = {
            name: value.name,
            value: value.name,
            depth: value.depth,
            x: this.getX(width, array, value, index),
            y: this.getY(height, constMaxDepth, value),
            symbol: 'circle',
            symbolSize: [40, 40]
          }
          nodeList.push(node)
        })

        // 指定图表的配置项和数据
        let option = {
          title: {
            text: '标题',
            top: '20'
          },
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbol: 'circle', // 关系图节点标记的图形
              symbolSize: 40, // 关系图节点标记的大小
              roam: true, // 是否开启鼠标缩放和平移漫游
              itemStyle: {
                normal: {
                  color: 'rgb(18, 150, 219)'
                }
              },
              lineStyle: {
                normal: {
                  color: 'rgb(18, 150, 219)',
                  opacity: 0.9,
                  width: 1,
                  curveness: 0
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: (params) => {
                    return params.value
                  }
                }
              },
              // edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [2, 6],
              edgeLabel: {
                normal: {
                  show: false, // 是否显示边标签
                  position: 'middle',
                  formatter: '{b}',
                  textStyle: {
                    color: 'rgb(192, 0, 0)',
                    fontWeight: 'bold',
                    fontSize: 12
                  }
                }
              },
              data: nodeList,
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

