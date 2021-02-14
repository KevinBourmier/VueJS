<template>
  <router-link to="/addChampionnat"><button class="btn btn-primary mb-4">Ajouter un championnat</button></router-link>
  <div class="container">
    <div class="row">
      <div class="content-header col-lg-3 mb-4"
               v-for="(league,index) in leagues"
               v-bind:item="league"
               v-bind:index="index"
               v-bind:key="league._id">
        <div class="card">
          <div class="card-header">
              <blockquote class="blockquote mb-0">
                {{league.name}}
              </blockquote>
          </div>
          <div class="card-body">
            <div class="d-grid gap-2 mx-auto">
              <router-link :to="'/screenTeam/' + league._id">
                <button class="btn btn-primary">Voir les équipes</button>
              </router-link>
              <router-link :to="'/matches/' + league._id">
                <button class="btn btn-primary">Voir les matches</button>
              </router-link>
            </div>
          </div>
        </div>
        <button class="btn btn-danger mt-2" @click="deleteLeague(league._id)">Supprimer</button>

      </div>
    </div>
  </div>
</template>


<script>

import ChampionnatService from '../services/ChampionnatService.ts';

export default {
  name: 'ChampionnatComponent',
  data() {
    return {
      leagues: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.leagues = await ChampionnatService.getLeagues();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    deleteLeague(id) {
      try {
        ChampionnatService.deleteLeague(id);
        this.leagues = this.leagues.filter(element => id !== element._id)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-championnat {
  margin: auto;
  }
.addLeague{
  text-decoration: none;
  margin-top: 2%;
  border: 2px solid black;
  color: black;
  background-color: white;
}
.card-body {
  &:hover {
    background-color: #EEEAE9;
    cursor: pointer;
  }
}
</style>

