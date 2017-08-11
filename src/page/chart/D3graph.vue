<template>
  <el-row>
    <!--<div id='main' style='width: 100% height: 500px'></div>-->
    <svg width="100%" height="500"></svg>
  </el-row>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    /* 绘制图表 */
    drawChart() {
      let svg = this.$d3.select('svg')
      let width = +svg.attr('width')
      let height = +svg.attr('height')
      let g = svg.append('g').attr('transform', 'translate(40,0)')

      let tree = this.$d3.tree()
        .size([height - 400, width - 160])

      let cluster = this.$d3.cluster()
        .size([height, width - 160])
        
      this.$d3.json('static/data.json', function (error, root) {
        if (error) throw error

        cluster(root)

        let link = g.selectAll('.link')
          .data(root.descendants().slice(1))
          .enter().append('path')
          .attr('class', 'link')
          .attr('d', diagonal)

        let node = g.selectAll('.node')
          .data(root.descendants())
          .enter().append('g')
          .attr('class', function (d) { return 'node' + (d.children ? ' node--internal' : ' node--leaf') })
          .attr('transform', function (d) { return 'translate(' + d.y + ',' + d.x + ')' })

        node.append('circle')
          .attr('r', 2.5)

        node.append('text')
          .attr('dy', 3)
          .attr('x', function (d) { return d.children ? -8 : 8 })
          .style('text-anchor', function (d) { return d.children ? 'end' : 'start' })
          .text(function (d) { return d.id.substring(d.id.lastIndexOf('.') + 1) })

        this.$d3.selectAll('input')
          .on('change', changed)

        let timeout = setTimeout(function () {
          this.$d3.select('input[value=\'tree\']')
            .property('checked', true)
            .dispatch('change')
        }, 1000)

        function changed() {
          timeout = clearTimeout(timeout)
            (this.value === 'tree' ? tree : cluster)(root)
          let t = this.$d3.transition().duration(750)
          node.transition(t).attr('transform', function (d) { return 'translate(' + d.y + ',' + d.x + ')' })
          link.transition(t).attr('d', diagonal)
        }
      })

      function diagonal(d) {
        return 'M' + d.y + ',' + d.x
          + 'C' + (d.parent.y + 100) + ',' + d.x
          + ' ' + (d.parent.y + 100) + ',' + d.parent.x
          + ' ' + d.parent.y + ',' + d.parent.x
      }
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style scoped>
  .link {
    fill: none;
    stroke: #aaa;
  }

  .node text {
    font: 10px sans-serif;
  }

  .node circle {
    stroke: #fff;
    stroke-width: 1.5px;
  }

  .node.active {
    fill: red;
  }
</style>

