<template>
  <el-row>
    <div id="main" style="width: 100%; height: 500px"></div>
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
      let DomWidth = document.getElementById("main").offsetWidth
      
      let svg = this.$d3.select("#main")
        .append("svg")
        .attr("width", DomWidth)
        .attr("height", 500)

      let width = +svg.attr("width")
      let height = +svg.attr("height")
      let g = svg.append("g").attr("transform", "translate(0,50)")

      let tree = this.$d3.tree()
        .size([width, height-100])

      this.$d3.json("static/data.json", (error, data) => {
        if (error) throw error

        let root = this.$d3.hierarchy(data)
        
        tree(root)

        let link = g.selectAll(".link")
          .data(root.descendants().slice(1))
          .enter().append("path")
          .attr("class", "link")
          .attr("d", function (d) {
            return "M" + d.x + " " + d.y +
              "L" + d.x + " " + (d.parent.y + 100) +
              "L" + d.parent.x + " " + (d.parent.y + 100) + 
              "L" + d.parent.x + " " + d.parent.y
          })
          .attr("style", function () {
            return "stroke: rgb(18, 150, 219)"
          })

        let node = g.selectAll(".node")
          .data(root.descendants())
          .enter().append("g")
          .attr("class", ".node")
          .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")"
          })

        node.append("circle")
          .attr("r", 20)
          .attr("style","fill: rgb(18, 150, 219)")

        node.append("text")
          .attr("dx", function (d) {
            return 0;
          })
          .attr("dy", 5)
          .style("text-anchor", function (d) {
            return "middle";
          })
          .style("fill", "#fff")
          .text(function (d) { return d.data.name; })
      })
    }
  },
  mounted() {
    this.drawChart()
  }
}
</script>

<style>
  .node {
    font: 12px sans-serif;
  }

  .link {
    fill: none;
    stroke: #ccc;
    stroke-width: 1.5px;
  }
</style>
