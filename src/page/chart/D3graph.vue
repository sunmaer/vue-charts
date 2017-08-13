<template>
  <el-row>
    <svg width="1100" height="500"></svg>
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
      let svg = this.$d3.select("svg")
      let width = +svg.attr("width")
      let height = +svg.attr("height")
      let g = svg.append("g").attr("transform", "translate(100,0)")

      let tree = this.$d3.tree()
        .size([height, width - 160])

      this.$d3.json("static/data.json", (error, data) => {
        if (error) throw error

        let root = this.$d3.hierarchy(data)
        tree(root)

        let link = g.selectAll(".link")
          .data(root.descendants().slice(1))
          .enter().append("path")
          .attr("class", "link")
          .attr("d", function (d) {
            return "M" + d.y + "," + d.x
              + "C" + (d.parent.y + 120) + "," + d.x
              + " " + (d.parent.y + 120) + "," + d.parent.x
              + " " + d.parent.y + "," + d.parent.x
          })
          // .attr("d", function(d){
          //       return "M"+d.y+" "+d.x+
          //       "L"+(d.parent.y+120)+" "+d.x+
          //       " L"+(d.parent.y+120)+" "+d.parent.x+" L"+
          //       d.parent.y+" "+d.parent.x
          // })
          // .attr("style", function () {
          //   return "stroke:#F7881F"
          // });

        let node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
          .attr("class", function (d) { return "node" + (d.children ? " node--internal" : " node--leaf") })
          .attr("transform", function (d) {
            return "translate(" + d.y + "," + d.x + ")"
          })

        node.append("circle")
          .attr("r", 2.5);

        node.append("text")
          .attr("dy", 3)
          .attr("x", function (d) { return d.children ? -8 : 8; })
          .style("text-anchor", function (d) { return d.children ? "end" : "start" })
          .text(function (d) {
            return d.data.name
          })
      })
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style scoped>
  .node {
    font: 12px sans-serif;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1.5px;
  }
</style>
