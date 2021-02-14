<template>
  <div class="card col-md-6 card-championnat">
    <div class="card-header">
      {{ team.name }}
    </div>
    <div class="card-body">
      <div class="blockquote mb-0"
                  v-for="(player,index) in players"
                  v-bind:item="player"
                  v-bind:index="index"
                  v-bind:key="player._id">
        {{player.firstName}} {{player.lastName}}
      </div>
      <div v-if="players.length === 0">
        <h3>Il n'y pas pas de joueurs </h3>
      </div>
    </div>
  </div>

  <router-link :to="'/addPlayer/' + team._id "><button class="btn btn-primary mt-3">Ajouter un joueur</button></router-link>



</template>

<script>
import TeamService from "../services/TeamService.ts";

export default {
  name: "ScreenTeamComponent",
  data() {
    return {
      team: [],
      players: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.team = await TeamService.getOneTeam(this.$route.params.id);
      this.players = this.team.players;
    } catch (err) {
      console.log(err);
    }
  }

}

</script>

<style scoped>

.card-championnat {
  margin: auto;
}

</style>
