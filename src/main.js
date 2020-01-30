import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

// list locations of the to-be-routed-components and append individual name for reference.
import Home from "@/pages/home";
import Info from "@/pages/info";
import Fotos from "@/components/fotos";
import Negatieven from "@/components/negatieven";
import Dias from "@/components/dias";
import Lichtbeelden from "@/components/lichtbeelden";

// append filepath; which component will render when the user is on this URL-path?
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/negatieven",
        component: Negatieven
      },
      {
        path: "/fotos",
        component: Fotos
      },
      {
        path: "/dias",
        component: Dias
      },
      {
        path: "/lichtbeelden",
        component: Lichtbeelden
      }
    ]
  },
  {
    path: "/info",
    component: Info
  }
];

// state which routes to be used
const router = new VueRouter({
  routes
});

// disable the annoying 'running vue in production mode'-warning
Vue.config.productionTip = false;

// render app, append routed and mount to #app
new Vue({
  render: h => h(App),
  router
}).$mount("#app");
