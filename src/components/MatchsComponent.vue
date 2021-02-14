<template>
    <router-link :to="'/addMatch/' + id"><button class="btn btn-primary mb-3">Ajouter un match</button></router-link>

    <div class="container">
    <div class="row">
      <div class="content-header col-lg-3 mb-4"
           v-for="(match,index) in matches"
           v-bind:item="match"
           v-bind:index="index"
           v-bind:key="match._id">
          <div class="card">
            <div class="card-header">
              {{match.homeTeam}} vs {{match.awayTeam}}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                  {{match.scoreHome}} - {{match.scoreAway}}
                </blockquote>
          </div>
        </div>
      </div>
        <div v-if="matches.length === 0" class="card-header col-lg-6 mx-auto bg-primary">
            <h3 class="mx-auto" style="color: white">Il n'y a pas de matchs</h3>
        </div>
    </div>
  </div>

</template>

<script>
import Matches from "@/services/MatchService";
import ChampionnatService from "@/services/ChampionnatService";
import axios from "axios";

const api = 'http://localhost:3000/league/allMatchs'



export default {
name: "MatchsComponent",
  data(){
    return {
      league: [],
      matches: [],
      id: String
    }
  },
  async created(){
    try {
      this.league = await ChampionnatService.getOneLeague(this.$route.params.id)
      axios.post(api, {matchsId: this.league.matches}).then((response) => {
        this.matches = response.data
        this.id = this.$route.params.id
      })
    } catch (error){
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
