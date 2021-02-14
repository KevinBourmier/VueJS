import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Championnat from '../views/Championnat.vue'
import AddChampionnat from '../views/AddChampionnat.vue'
import ScreenTeamByLeague from '../views/ScreenTeamByLeague.vue'
import Team from "../views/Team.vue";
import ScreenTeam from "../views/ScreenTeam.vue";
import Matches from "../views/Matches.vue";
import AddTeam from "../views/AddTeam.vue";
import AddTeamLeague from "../views/AddTeamLeague.vue";
import AddPlayer from "../views/AddPlayerToTeam.vue";
import AddMatch from "../views/AddMatch.vue";






const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Championnat',
    component: Championnat
  },
  {
    path: '/addChampionnat',
    name: 'AddChampionnat',
    component: AddChampionnat
  },
  {
    path: '/screenTeam/:id',
    name: 'ScreenTeamByLeague',
    component: ScreenTeamByLeague
  },
  {
    path: '/addTeam',
    name: 'AddTeam',
    component: AddTeam
  },
  {
    path: '/screenOneTeam/:id',
    name: 'TeamComponent',
    component: ScreenTeam
  },
  {
    path: '/matches/:id',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/addPlayer/:id',
    name: 'AddPlayerToTeam',
    component: AddPlayer
  },
  {
    path: '/addMatch/:id',
    name: 'AddMatch',
    component: AddMatch
  },

  {
    path: '/:id/addTeamToLeague',
    name: 'AddTeamToLeague',
    component: AddTeam
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
