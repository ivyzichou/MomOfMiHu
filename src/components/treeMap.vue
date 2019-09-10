<template>
  <div>
    <ve-tree
            :data = "chartData"></ve-tree>
  </div>
</template>

<script>
import VeTree from 'v-charts/lib/tree.common'
export default {
  name: 'treeMap',
  components: {
    VeTree
  },
  props: {
    columns: {
      type: Array,
      default: () => ['name', 'value']
    },
    rows: {
      type: Array,
      default: () => [{
        name: 'tree',
        value: [{
          name: 'f',
          value: 1,
          children: [
            {
              name: 'a',
              value: 1,
              children: [
                {
                  name: 'a-a',
                  value: 2
                },
                {
                  name: 'a-b',
                  value: 2
                }
              ]
            }
          ]
        }]
      }]
    }
  },
  computed: {
    chartData () {
      return {
        columns: this.columns,
        rows: this.rows
      }
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
