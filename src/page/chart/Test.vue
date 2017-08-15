<template>
  <Test :nodes="nodes" :links="links"></Test>
</template>

<script>
  import Test from './Graph.vue'

  export default {
    data () {
      return {
        nodes: [
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
        ],
        links: [
          {
            source: 'node1',
            target: 'node2',
            value: 100
          },
          {
            source: 'node1',
            target: 'node3',
            value: 200
          },
          {
            source: 'node1',
            target: 'node4',
            value: 300
          },
          {
            source: 'node1',
            target: 'node5',
            value: 400
          },
          {
            source: 'node1',
            target: 'node6',
            value: 500
          },
          {
            source: 'node1',
            target: 'node7',
            value: 100
          },
          {
            source: 'node1',
            target: 'node8',
            value: 200
          },
          {
            source: 'node1',
            target: 'node9',
            value: 300
          },
          {
            source: 'node1',
            target: 'node10',
            value: 400
          },
          {
            source: 'node1',
            target: 'node11',
            value: 500
          },
          {
            source: 'node1',
            target: 'node12',
            value: 100
          },
          {
            source: 'node1',
            target: 'node13',
            value: 200
          },
          {
            source: 'node1',
            target: 'node14',
            value: 300
          },
          {
            source: 'node1',
            target: 'node15',
            value: 400
          }
        ]
      }
    },
    components: {
      Test
    }
  }
</script>

<style>

</style>
