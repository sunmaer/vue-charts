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
      let DomWidth = document.getElementById("main").offsetWidth // 获取 DOM 宽度
      let DomHeight = document.getElementById("main").offsetHeight // 获取 DOM 高度

      let svg = this.$d3.select("#main") // 选择 ID 为 main 的元素
        .append("svg") // 定义 svg
        .attr("width", DomWidth) // 设置 svg 宽度
        .attr("height", DomHeight) // 设置 svg 高度
      
      // svg 的 g 元素类似于 div，加入的元素都放在 g 里面，g 可以设置统一的 css，里面的子元素会继承可继承css属性
      let g = svg.append("g").attr("transform", "translate(0,50)")

      let tree = this.$d3.tree() // 定义集群图布局
        .size([DomWidth, DomHeight-100]) // 设定尺寸，即转换后的各节点的坐标在哪一个范围内

      this.$d3.json("static/data.json", (error, data) => { // 请求 JSON 文件
        if (error) throw error

        let root = this.$d3.hierarchy(data) // 构建一个具有根节点的新的层级结构数据
        
        let space = (DomHeight - 150) / (root.height) * 0.8 // 设置上下层间隔

        tree(root) // 根据指定的根节点代表的hierarchy数据生成一个树状布局数据

        let link = g.selectAll(".link") // 生成边，利用 svg 的 path
          .data(root.descendants().slice(1))
          .enter().append("path")
          .attr("class", "link")
          .attr("d", function (d) {
            return "M" + d.x + " " + d.y +
              "L" + d.x + " " + (d.parent.y + space) +
              "L" + d.parent.x + " " + (d.parent.y + space) + 
              "L" + d.parent.x + " " + d.parent.y
          })
          .attr("style", function () {
            return "stroke: rgb(18, 150, 219)"
          })

        let node = g.selectAll(".node") // 生成节点
          .data(root.descendants())
          .enter().append("g")
          .attr("class", ".node")
          .attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")"
          })
        let node1 = g.selectAll(".node")
          .filter(function(d, i) {
            return d.depth === 0
          })
          // console.log(node1)
        node1.append("image") // 插入图片
          .attr("x", -15)
          .attr("y", -15)
          .attr("width", 30)
          .attr("height", 30)
          .attr("xlink:href", "https://avatars3.githubusercontent.com/u/18280125?v=4&s=460")
          
        node.append("circle") // 绘制圆圈
          .attr("r", 20)
          .attr("style","fill: rgb(18, 150, 219)")

        node.append("text") // 绘制文本
          .attr("dx", function (d) {
            return 0;
          })
          .attr("dy", 5)
          .style("text-anchor", function (d) {
            return "middle";
          })
          .style("fill", "#fff")
          .style("font-size", "12px")
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
