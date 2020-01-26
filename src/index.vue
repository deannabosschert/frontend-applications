<template>
  <div id="app">
    <testComponent msg="and they were roommates"/>
  </div>
</template>

<script>
import testComponent from './components/testComponent.vue'

export default {
  name: 'app',
  components: {
    testComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
