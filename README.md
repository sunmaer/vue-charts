# Vue2.0 中数据可视化库实现关系图

> 项目地址：[https://github.com/sunmaer/vue-charts](https://github.com/sunmaer/vue-charts)

## [Echarts](http://echarts.baidu.com/index.html)

> 版本：3.6.2

- 树状图
Echarts3中删除了tree图，但是我们通过自定义节点坐标还是可以实现一个简单的树图。给定节点层级，然后通过层级平均分布节点，不过这种方法存在的问题还是不少，建议使用D3.js实现树图，见后面。

![树状图](http://otxtxlg3e.bkt.clouddn.com/tree.png)

- 人物关系图

![人物关系图](http://otxtxlg3e.bkt.clouddn.com/net.png)

## [D3.js](https://d3js.org/) 组织结构图示例

> 版本：4.10.0

![组织结构图](http://otxtxlg3e.bkt.clouddn.com/organise.png)

## [jsPlumb](https://www.jsplumbtoolkit.com/community/doc/home.html) 流程图示例

> 版本：2.4.3

![流程图](http://otxtxlg3e.bkt.clouddn.com/flow.png)