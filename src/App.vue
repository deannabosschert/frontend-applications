<template>
    <div id="app">
      <router-link to='/'>home</router-link>
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
