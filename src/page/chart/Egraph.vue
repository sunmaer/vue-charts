<template>
  <el-row>
    <div id="main" style="width: 100%; height: 500px"></div>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        nodes: [
          {
            name: 'node1',
            depth: 1,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?                                                                               v=4&s=460'
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
          }
        ],
        links: [
          {
            source: 'node1',
            target: 'node2',
            weight: 1
          },
          {
            source: 'node1',
            target: 'node3',
            weight: 1
          },
          {
            source: 'node2',
            target: 'node4',
            weight: 1
          },
          {
            source: 'node2',
            target: 'node5',
            weight: 1
          },
          {
            source: 'node3',
            target: 'node6',
            weight: 1
          },
          {
            source: 'node3',
            target: 'node7',
            weight: 1
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
      getNodes (nodeList) {
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
        let array = this.getNodes(nodeList)
        let count = 0
        let i = 0
        while (index > count) {
          count += array[i]
          i++
        }
        count -= array[i - 1]
        return index - count
      },
      /* 画图 */
      drawChart () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let nodeList = []
        let width = document.getElementById('main').offsetWidth
        let height = document.getElementById('main').offsetHeight
        let constMaxDepth = this.getDepth(this.nodes)
        let array = this.getNodes(this.nodes)
        this.nodes.forEach((value, index, arr) => {
          let x = width / (array[value.depth - 1] + 1) * this.getNodeIndex(this.nodes, index + 1)
          let y = (height - 20) * value.depth / (constMaxDepth + 1) + 20
          let node = {
            name: value.name,
            // value: rangeRandom(constMinRadius, constMaxRadius),
            // id: index,
            depth: value.depth,
            x: x,
            y: y,
            // category: depth === constMaxDepth ? 0 : 1,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460',
            symbolSize: [30, 30]
          }
          nodeList.push(node)
        })

        let option = {
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 6,
              roam: true,
              label: {
                normal: {
                  show: false
                }
              },
              edgeSymbol: ['circle'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: nodeList,
              links: this.links,
              lineStyle: {
                normal: {
                  color: 'rgb(117, 171, 220)',
                  opacity: 0.9,
                  width: 2,
                  curveness: 0
                }
              }
            }
          ]
        }
        myChart.setOption(option)
      }
    },
    mounted () {
      this.drawChart()
    }
  }
</script>

<style lang="scss" scoped>

</style>

