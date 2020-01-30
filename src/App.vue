<template>
  <div id="app">
    <header>
      <router-link class="homeSymbol" to="/">&#127968; home</router-link>
      <router-link class="infoSymbol" to="/info">&#8505; info</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
/*eslint 'no-console':0*/
export default {
  name: "app",
  components: {}
};
</script>

<style>
.homeSymbol,
.infoSymbol {
  font-size: 2rem;
  font-variant: small-caps;
  font-weight: 600;
  color: #a31a1a;
  display: flex;
}

header {
  position: absolute;
  margin-left: 1rem;
}
</style>
