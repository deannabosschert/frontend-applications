import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import App from './index.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
// const Home = {template: '#home'}
// const Fotos = { template: '#fotos' }
// const Negatieven = { template: '#negatieven' }
// const Dias = { template: '#dias' }
// const Lichtbeelden = { template: '#lichtbeelden' }
// const Info = { template: 'info' }


const Info = {
    template: '#info'
};

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  // { path: '/components/fotos.vue', component: Fotos},
  // { path: '/#/negatieven', component: Negatieven },
  // { path: '/#/components/dias.vue', component: Dias },
  // { path: '/#/components/lichtbeelden.vue', component: Lichtbeelden },
  // { path: '/info', component: Info }
  { path: '/info', component: Info }


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
