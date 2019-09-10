<template>
  <div>
    <el-cascader placeholder = "试试搜索"
                 :options = "options">
    </el-cascader>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [{
        value: 'f',
        label: 'f',
        children: [
          {
            value: 'a',
            label: 'a',
            children: [
              {
                value: 'a-a',
                label: 'a-a'
              },
              {
                value: 'a-b',
                label: 'a-b'
              }
            ]
          }
        ]
      }]
    }
  },
  created () {
    console.log('----6767----', document.getElementsByClassName('el-cascader-menu__list'))
    // let list1 = document.getElementsByClassName('el-cascader-menu__list')
  }
}
</script>

<style>
</style>
