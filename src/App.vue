<template>
  <div id="app">
    <router-view/>
    <components-trans-ways></components-trans-ways>
  </div>
</template>

<script>
import componentsTransWays from './components/componentsTransWays'

export default {
  name: 'App',
  components: {
    componentsTransWays
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
