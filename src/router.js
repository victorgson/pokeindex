import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import PokemonView from './views/PokemonView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: PokemonView,
      path: '/pokemon/:pokeName?'
    },

    {
      component: HomeView,
      path: '/'
    }
  ]
})
