<template>
  <div id="app">
    <switchBetween
      @fotos-click="choice = 'fotos'"
      @negatieven-click="choice = 'negatieven'"
      @dias-click="choice = 'dias'"
      @lichtbeelden-click="choice = 'lichtbeelden'"
    />

    <input type="text" v-model="title" />
    <button @click="alertMessage">Alert</button>

    <div v-if="choice === 'fotos'">
      <fotos/>
    </div>

    <div v-if="choice === 'negatieven'">
      <negatieven/>
    </div>

    <div v-if="choice === 'dias'">
      <dias/>
    </div>

    <div v-if="choice === 'lichtbeelden'">
      <lichtbeelden/>
    </div>

    </div>
</template>

<script>
import switchBetween from "./components/switchBetween.vue"
import fotos from "./components/fotos.vue"
import negatieven from "./components/negatieven.vue"
import dias from "./components/dias.vue"
import lichtbeelden from "./components/lichtbeelden.vue"


export default {
  name: "app",
  data() {
    return {
      choice: "fotos",
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
    fotos,
    negatieven,
    lichtbeelden,
    dias
  }
}
</script>

<style>
body{
  background-color: #fbf3e4

}
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
