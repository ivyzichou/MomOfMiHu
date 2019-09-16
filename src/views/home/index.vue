<template>
    <div>
      <SelectCom></SelectCom>
      <tree-map></tree-map>
    </div>
</template>

<script>
import TreeMap from '@/components/treeMap'
import SelectCom from './common/selectCom'
export default {
  name: 'home',
  components: {
    TreeMap,
    SelectCom
  },
  data () {
    return {
      selectComList: [], // 筛选框的数组
      treeMapList: [], // 树图的数组
      recieveList: [{
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
  created () {
    this.transArray(this.recieveList)
  },
  methods: {
    transArray (array) {
      if (array.length !== 0) {
        this.treeMapList = array[0].value
      }
      console.log('hfkasdhf', array[0].value)
      console.log('13232323', this.treeMapList)
      this.modifyArray(this.treeMapList)
    },
    modifyArray (array) {
      console.log('??????', array[0].children)
      console.log('===asadsa====', this.selectComList)
      if (array) {
        // for (let j = 0; j < array.length; j++) {
        if (array.children) {
          for (let i = 0; i < array.children.length; i++) {
            this.selectComList.children[i].label = array.children[i].name
            this.selectComList.children[i].value = array.children[i].value
            this.selectComList.children[i].children = this.modifyArray(array.children[i].children)
          }
        }
        // }
        console.log('=======', this.selectComList)
      }
    }
  }
}
</script>

<style>
</style>
