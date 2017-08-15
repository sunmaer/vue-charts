<template>
  <div>
    <div :id="option.grapgName" :style="option.lengthWight">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'graph',
    props: {
      nodes: {
        type: Array,
        default () {
          return [
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
          ]
        }
      },
      links: {
        type: Array,
        default () {
          return [
            {
              source: 'node1',
              target: 'node2'
            },
            {
              source: 'node1',
              target: 'node3'
            },
            {
              source: 'node1',
              target: 'node4'
            },
            {
              source: 'node1',
              target: 'node5'
            },
            {
              source: 'node1',
              target: 'node6'
            },
            {
              source: 'node1',
              target: 'node7'
            },
            {
              source: 'node1',
              target: 'node8'
            },
            {
              source: 'node1',
              target: 'node9'
            },
            {
              source: 'node1',
              target: 'node10'
            },
            {
              source: 'node1',
              target: 'node11'
            },
            {
              source: 'node1',
              target: 'node12'
            },
            {
              source: 'node1',
              target: 'node13'
            },
            {
              source: 'node1',
              target: 'node14'
            },
            {
              source: 'node1',
              target: 'node15'
            }
          ]
        }
      }
    },
    data () {
      return {
        option: {
          grapgName: 'canvas',
          lengthWight: {
            width: '1000px',
            height: '500px'
          },
          title: {
            text: '关系图',
            top: '20',
            left: 'center'
          },
          series: {
            name: '关系图',
            type: 'graph',
            layout: 'force',
            roam: true,
            symbolSize: 10,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: (params) => {
                    return params.name + ':' + params.value
                  }
                }
              }
            },

            // 显示name的位置
            label: {
              normal: {
                show: true,
                position: 'right'
              }
            },
            data: [],
            links: []
          }
        },
        canvas: {}
      }
    },
    watch: {
      nodes (newVal) {
        newVal.map(item => {
          item.nameid = item.id
          delete item.id
        })
        let one = newVal[0].name

        // 中心点关系图，自己构造links
        this.option.series.links = newVal.map(item => {
          let target = item.name
          let temp = {
            source: one,
            target: target
          }
          return temp
        })

        this.option.series.data = newVal
        this.relationship()
      },
      links (newVal) {
        this.option.series.links = newVal
        this.relationship()
      }
    },
    mounted () {
      this.canvas = this.$echarts.init(document.getElementById(this.option.grapgName))
      let that = this
      this.option.series.data = this.nodes
      this.option.series.links = this.links
      // 添加事件
      this.canvas.on('click', function (params) {
        that.$emit('canvasClick', params)
      })
      this.relationship()
    },
    methods: {
      xuanran () {
        this.relationship()
      },
      relationship () {
        this.canvas.setOption({
          title: this.option.title,
          series: this.option.series
        })
      }
    }
  }
</script>
<style scoped>

</style>
