import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from '@/components/home'
import Info from '@/pages/info'
import Fotos from '@/components/fotos'
import Negatieven from '@/components/negatieven'
import Dias from '@/components/dias'
import Lichtbeelden from '@/components/lichtbeelden'

Vue.use(VueRouter);
const routes = [{
  path: '/negatieven',
  component: Negatieven
},{
  path:'/',
  component: Home
},{
  path:'/info',
  component: Info
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
];

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
