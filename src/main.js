import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from '@/pages/home'
import Info from '@/pages/info'
import Fotos from '@/components/fotos'
import Negatieven from '@/components/negatieven'
import Dias from '@/components/dias'
import Lichtbeelden from '@/components/lichtbeelden'

Vue.use(VueRouter);
const routes = [
  {
  path:'/',
  component: Home,
    children: [
      {
        path: '/negatieven',
        component: Negatieven
      },
      {
        path: '/fotos',
        component: Fotos },
      {
        path: '/dias',
        component: Dias
      },
      {
        path: '/lichtbeelden',
        component: Lichtbeelden
      }
    ]
},{
  path:'/info',
  component: Info
}
]



const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
