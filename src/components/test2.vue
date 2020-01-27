<template>
  <div class="test2">
    <h1>{{ title }}</h1>
    <router-link to="/test">Go to [component]</router-link>
  <router-link to="/test2">Go to [component]</router-link>
  <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: "test2",
  props: {
    title: String
  }
}
</script>

<style></style>
