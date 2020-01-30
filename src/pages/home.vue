<template>
  <main id="home">
    <h1>Fotografiecollectie NMVW- indonesia</h1>
    <SwitchBetween
      @fotos-click="choice = 'fotos'"
      @negatieven-click="choice = 'negatieven'"
      @dias-click="choice = 'dias'"
      @lichtbeelden-click="choice = 'lichtbeelden'"
    />

    <div v-if="choice === 'fotos'">
      <Fotos title="foto's" category="fotos" />
      />
    </div>

    <div v-if="choice === 'negatieven'">
      <Negatieven title="negatieven" category="negatieven" />
    </div>

    <div v-if="choice === 'dias'">
      <Dias title="dia's" category="dias" />
    </div>

    <div v-if="choice === 'lichtbeelden'">
      <Lichtbeelden title="lichtbeelden" category="lichtbeelden" />
    </div>
  </main>
</template>

<script>
import SwitchBetween from "@/components/switchBetween.vue";
import Fotos from "@/components/fotos.vue";
import Negatieven from "@/components/negatieven.vue";
import Dias from "@/components/dias.vue";
import Lichtbeelden from "@/components/lichtbeelden.vue";

export default {
  name: "home",
  data() {
    return {
      choice: "fotos"
    };
  },
  methods: {},
  components: {
    SwitchBetween,
    Fotos,
    Negatieven,
    Lichtbeelden,
    Dias
  }
};
</script>

<style>
body {
  background-color: #fbf3e4;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
  font-variant: small-caps;
  display: flex;
  justify-content: space-around;
}

h3 {
  background-color: #a31a1a;
  color: #ffffff;
  font-size: 1em;
  font-weight: 450;
  padding: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
  letter-spacing: 0.1px;
}
p {
  color: #ffffff;
}
section {
  background-color: #b63232;
  max-width: 20vw;
  border-radius: 5px;
  box-shadow: 10px 10px 3px -4px rgba(0, 0, 0, 0.21);
  padding: 0rem 1rem 1rem 1rem;
  margin: 0.5rem;
}

.content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.images {
  max-width: inherit;
  max-height: inherit;
  object-fit: cover;
  margin-top: -1rem;
}

#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  align-content: center;
  margin-left: 3rem;
  margin-right: 3rem;
}
</style>
