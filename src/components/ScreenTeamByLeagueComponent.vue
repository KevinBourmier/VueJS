<template>
  <div class="card col-md-6 card-championnat">
    <div class="card-header">
      {{ league.name }}
    </div>
    <div class="card-body flex-column">
      <div class="blockquote mb-0"
                  v-for="(team,index) in teams"
                  v-bind:item="team"
                  v-bind:index="index"
                  v-bind:key="team._id">
        <router-link :to="'/screenOneTeam/' + team._id" style="text-decoration: none" >
          {{team.name}}
        </router-link>
        <button class="btn-sm btn-danger float-right" @click="deleteTeam(team._id)">Supprimer</button>
      </div>
      <div v-if="teams.length === 0">
        <h3>Il n'y a pas d'équipes</h3>
      </div>
    </div>

  </div>
  <router-link :to="'/' + id + '/addTeamToLeague'"><button class="btn btn-primary mt-3">Ajouter</button></router-link>
</template>

<script>
import ChampionnatService from "@/services/ChampionnatService";
import axios from "axios";
const api = 'http://localhost:3000/league/'
const apiTeam = 'http://localhost:3000/teams/'

export default {
name: "ScreenTeamByLeagueComponent",
  data() {
    return {
      league: [],
      teams : [],
      error: '',
      text: '',
      id: String
    }
  },
  async created() {
    try {
      this.league = await ChampionnatService.getOneLeague(this.$route.params.id);
      axios.post(api + 'allTeams', {leaguesId: this.league.teams}).then((response) => {
        this.teams = response.data
        this.id = this.$route.params.id
      })
    } catch (err) {
        console.log(err);
    }
  },
  methods: {
    deleteTeam(id) {
      axios.post(api + "teamId/delete" , {idLeague: this.$route.params.id, idTeam: id}).then((response) => {
      }).catch((err)=> {
        console.log(err)
      })
      this.teams = this.teams.filter(element => id !== element._id)
    }
  }
}

</script>

<style scoped>

.card-championnat {
  margin: auto;
}

</style>
