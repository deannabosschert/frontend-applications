import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './index.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const fotos = { template: '<div>fotos</div>' }
const negatieven = { template: '<div>negatieven</div>' }
const dias = { template: '<div>dias</div>' }
const lichtbeelden = { template: '<div>lichtbeelden</div>' }
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/fotos', component: fotos },
  { path: '/negatieven', component: negatieven },
  { path: '/dias', component: dias },
  { path: '/lichtbeelden', component: lichtbeelden }

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
