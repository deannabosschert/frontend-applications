<template>
  <div id="app">
    <switchBetween
      @teDoen-click="choice = 'teDoen'"
      @incl-alGehaald-click="choice = 'incl-alGehaald'"
    />

    <div v-if="choice === 'teDoen'">
      <h3>Toggle1header</h3>
      <testComponent/>
    </div>

    <div v-if="choice === 'incl-alGehaald'">
      <h3>Toggle2header</h3>
      <testComponent/>
    </div>
  </div>
</template>

<script>
import switchBetween from "./components/switchBetween.vue"
import testComponent from "./components/testComponent.vue"


export default {
  name: "app",
  data() {
    return {
      choice: "teDoen"
    }
  },
  components: {
    switchBetween,
    testComponent
  }
}
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  align-content: center;
}
</style>
