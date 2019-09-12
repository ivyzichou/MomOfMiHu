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
  }
}
</script>

<style>
</style>
