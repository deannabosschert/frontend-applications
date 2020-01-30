<template>
  <main id="home">
    <h1>Fotografiecollectie NMVW- indonesia</h1>
    <router-link to='/info'>Info</router-link>
    <!-- <router-view></router-view> -->
    <switchBetween
      @fotos-click="choice = 'fotos'"
      @negatieven-click="choice = 'negatieven'"
      @dias-click="choice = 'dias'"
      @lichtbeelden-click="choice = 'lichtbeelden'"
    />



    <div v-if="choice === 'fotos'">
      <Fotos
      category = "foto's"/>
      />
    </div>

    <div v-if="choice === 'negatieven'">
      <negatieven
      category = 'negatieven'/>
    </div>

    <div v-if="choice === 'dias'">
      <dias
      category = "dia's"
      />

    </div>

    <div v-if="choice === 'lichtbeelden'">
      <lichtbeelden
      category = 'lichtbeelden'
      />
    </div>

  </main>
</template>

<script>
// import switchBetween from "./components/switchBetween.vue"
import Fotos from "./fotos.vue"
// import negatieven from "./components/negatieven.vue"
// import dias from "./components/dias.vue"
// import lichtbeelden from "./components/lichtbeelden.vue"


export default {
  name: "home",
  data() {
    return {
      choice: "fotos"
    }
  },
  methods: {

 },
  components: {
  //   switchBetween,
    Fotos
  //   negatieven,
  //   lichtbeelden,
  //   dias
  }
}
</script>

<style>
body{
  background-color: #fbf3e4
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
  font-variant: small-caps;

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
