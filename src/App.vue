<template>
    <div id="app">
      <header>
        <router-link class = "homeSymbol" to='/'>&#127968; home</router-link>
        <router-link class = "infoSymbol" to='/info'>&#8505; info</router-link>
    </header>
        <router-view />
    </div>
</template>

<script>
/*eslint 'no-console':0*/
export default {
  name: "app",
  components: {
  }
}

</script>

<style scoped>

.homeSymbol, .infoSymbol{
font-size: 2rem;
font-variant: small-caps;
font-weight: 600;
color:#a31a1a;
display: flex;
}

header {
  position: absolute;
  margin-left: 1rem;
}



/* body{
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

} */
</style>
