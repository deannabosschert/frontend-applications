<template>
  <main id="home">
    <h1>Fotografiecollectie NMVW- indonesia</h1>
    <!-- <router-view></router-view> -->
    <SwitchBetween
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
      <Negatieven
      category = 'negatieven'/>
    </div>

    <div v-if="choice === 'dias'">
      <Dias
      category = "dia's"
      />

    </div>

    <div v-if="choice === 'lichtbeelden'">
      <Lichtbeelden
      category = 'lichtbeelden'
      />
    </div>

  </main>
</template>

<script>
import SwitchBetween from "@/components/switchBetween.vue"
import Fotos from "@/components/fotos.vue"
import Negatieven from "@/components/negatieven.vue"
import Dias from "@/components/dias.vue"
import Lichtbeelden from "@/components/lichtbeelden.vue"


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
    SwitchBetween,
    Fotos,
    Negatieven,
    Lichtbeelden,
    Dias
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

#home {
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
