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
        let option = {
          title: {
            text: '关系图'
          },
          tooltip: {},
          animationDurationUpdate: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [
            {
              type: 'graph',
              layout: 'none',
              symbolSize: 50,
              roam: true,
              label: {
                normal: {
                  show: true
                }
              },
              edgeSymbol: ['circle', 'arrow'],
              edgeSymbolSize: [4, 10],
              edgeLabel: {
                normal: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              data: [{
                name: '节点1',
                x: 550,
                y: 100
              }, {
                name: '节点2',
                x: 300,
                y: 200
              }, {
                name: '节点3',
                x: 550,
                y: 200
              }, {
                name: '节点4',
                x: 800,
                y: 200
              }],
              links: [
                {
                  source: '节点1',
                  target: '节点3'
                }, {
                  source: '节点1',
                  target: '节点2'
                }, {
                  source: '节点1',
                  target: '节点3'
                }, {
                  source: '节点1',
                  target: '节点4'
                }
              ],
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

