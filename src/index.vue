<template>
  <div id="app">
    <switchBetween
      @teDoen-click="choice = 'teDoen'"
      @incl-alGehaald-click="choice = 'incl-alGehaald'"
    />

    <input type="text" v-model="title" />
    <button @click="alertMessage">Alert</button>

    <div v-if="choice === 'teDoen'">
      <h3>Toggle1header</h3>
      <test1
      :title= "title"/>
    </div>

    <div v-if="choice === 'incl-alGehaald'">
      <h3>Toggle2header</h3>
      <test2
      :title= "title"/>
    </div>
  </div>
</template>

<script>
import switchBetween from "./components/switchBetween.vue"
import test1 from "./components/test1.vue"
import test2 from "./components/test2.vue"


export default {
  name: "app",
  data() {
    return {
      choice: "teDoen",
      title: 'Yeet!'
    }
  },
  methods: {
   alertMessage(){
     alert(this.title)
   }
 },
  components: {
    switchBetween,
    test1,
    test2
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
