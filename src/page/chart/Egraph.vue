<template>
  <el-row>
    <div id="main" style="width: 100%; height: 500px"></div>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      drawChart () {
        let myChart = this.$echarts.init(document.getElementById('main'))
        let nodes = []
        let links = []
        let constMaxDepth = 4
        let constMaxChildren = 3
        let constMinChildren = 2
        let constMaxRadius = 10
        let constMinRadius = 2
        let mainDom = {
          clientWidth: 1000,
          clientHeight: 500
        }

        function rangeRandom (min, max) {
          return Math.random() * (max - min) + min
        }

        function createRandomNode (depth, data) {
          let x = (mainDom.clientWidth - 20) * depth / (constMaxDepth + 1) + 20
          let y = mainDom.clientHeight / 2 + (0.5 - Math.random()) * 200
          let node = {
            name: 'NODE_' + nodes.length,
            value: rangeRandom(constMinRadius, constMaxRadius),
            // Custom properties
            id: nodes.length,
            depth: depth,
            x: y,
            y: x,
            category: depth === constMaxDepth ? 0 : 1
          }

          nodes.push(node)
          return node
        }

        function forceMockThreeData () {
          // let depth = 0

          let rootNode = createRandomNode(0)
          rootNode.name = 'ROOT'
          rootNode.category = 2

          function mock (parentNode, depth) {
            let nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren))

            for (let i = 0; i < nChildren; i++) {
              let childNode = createRandomNode(depth)
              console.log(parentNode.id, childNode.id, depth)
              links.push({
                source: parentNode.id,
                target: childNode.id,
                weight: 1
              })
              if (depth < constMaxDepth) {
                mock(childNode, depth + 1)
              }
            }
          }

          mock(rootNode, 1)
        }

        forceMockThreeData()
        // createRandomNode(0,$scope.datalist);

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
              // links: [],
              links: links,
              lineStyle: {
                normal: {
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

