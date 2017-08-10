<template>
  <el-row>
    <div id="main" style="width: 100%; height: 500px"></div>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        data_nodes: [
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
          }
        ],
        data_links: [
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
      getDepth(array) {
        let constMaxDepth = 0
        this.data_nodes.forEach((value, index, arr) => {
          constMaxDepth = value.depth > constMaxDepth ? value.depth : constMaxDepth
        })
        return constMaxDepth
      },
      /* 获取每层节点数 */
      getNodeNum(array) {

      },
      drawChart () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        // let nodes = []
        // let links = []
        // let constMaxDepth = 4
        // let constMaxChildren = 3
        // let constMinChildren = 2
        // let constMaxRadius = 10
        // let constMinRadius = 2
        // let mainDom = {
        //   clientWidth: 1000,
        //   clientHeight: 500
        // }

        // function rangeRandom (min, max) {
        //   return Math.random() * (max - min) + min
        // }

        // function createRandomNode (depth) {
        //   let x = mainDom.clientWidth / 2 + (0.5 - Math.random()) * 300
        //   let y = (mainDom.clientHeight - 20) * depth / (constMaxDepth + 1) + 20
        //   let node = {
        //     name: 'NODE_' + nodes.length,
        //     value: rangeRandom(constMinRadius, constMaxRadius),
        //     id: nodes.length,
        //     depth: depth,
        //     x: x,
        //     y: y,
        //     category: depth === constMaxDepth ? 0 : 1,
        //     symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460',
        //     symbolSize: [30, 30]
        //   }

        //   nodes.push(node)
        //   return node
        // }

        // function forceMockThreeData () {
        //   // let depth = 0

        //   let rootNode = createRandomNode(0)
        //   rootNode.name = 'ROOT'
        //   rootNode.category = 2

        //   function mock (parentNode, depth) {
        //     let nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren))

        //     for (let i = 0; i < nChildren; i++) {
        //       let childNode = createRandomNode(depth)
        //       links.push({
        //         source: parentNode.id,
        //         target: childNode.id,
        //         weight: 1
        //       })
        //       if (depth < constMaxDepth) {
        //         mock(childNode, depth + 1)
        //       }
        //     }
        //   }

        //   mock(rootNode, 1)
        // }

        // forceMockThreeData()
        let nodes = []
        let links = this.data_links
        let width = document.getElementById('main').offsetWidth
        let height = document.getElementById('main').offsetHeight
        
        this.data_nodes.forEach((value, index, arr) => {
          let x = width / 2 + (0.5 - Math.random()) * 300
          let y = (height - 20) * value.depth / (constMaxDepth + 1) + 20
          let node = {
            name: value.name,
            // value: rangeRandom(constMinRadius, constMaxRadius),
            id: index,
            depth: value.depth,
            x: x,
            y: y,
            // category: depth === constMaxDepth ? 0 : 1,
            symbol: 'image://https://avatars3.githubusercontent.com/u/18280125?v=4&s=460',
            symbolSize: [30, 30]
          }
          nodes.push(node)
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
              data: nodes,
              links: links,
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

