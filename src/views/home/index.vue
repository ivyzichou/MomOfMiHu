<template>
    <div>
      <!-- <SelectCom></SelectCom> -->
      <!-- <tree-map></tree-map> -->
      <div class="line-item"
           v-for="(index,item) in list"
           :key="index"
           :class="selected === index ? 'select' : ''"
           @click="handleClick(index)">
        {{item}}
      </div>
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
      selected: '',
      list: [1, 2, 3, 4, 5],
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
    handleClick (index) {
      this.selected = index
    },
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
            return array.children
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
.line-item {
  margin: 0.3rem;
  font-size: 0.26rem;
  color: brown;
}
.select {
  color: yellow;
}
</style>
