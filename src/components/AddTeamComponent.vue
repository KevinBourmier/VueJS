<template>
  <div class="card col-md-6 addLeagueCard">
    <div class="card-header">
      Ajouter une équipe
    </div>
    <form
        v-if="step === 1"
        id="app"
        @submit="addTeam"
        method="post"
    >
      <div class="mb-3">
        <label class="form-label">Nom</label>
        <input type="text" v-model="posts.team.name" class="form-control" name="posts.team.name" placeholder="Nom de l'équipe">

        <label class="form-label">Pays</label>
        <input type="text" v-model="posts.team.country" class="form-control" name="posts.team.country" placeholder="Pays de l'équipe">

        <button type="submit" class="btn btn-primary">Créer</button>
      </div>
    </form>
    <div v-if="step === 2" class="alert alert-success" role="alert">
      Equipe ajoutée
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  const api = 'http://localhost:3000/league/team/'

  export default {
    name: "addTeamComponent",
    data() {
      return {
        posts: {
          team: {
            name: '',
            country: '',
          }
        },
        error: '',
        step: 1
      }
    },
    methods:{
      addTeam(e){
        try{
          axios.post(api + this.$route.params.id, this.posts).then(result => {
            if (result.status === 200) {
              this.step = 2
            }
          })
          e.preventDefault();
        } catch (error){
          this.error = error.message;
        }
      }
    }
  }
</script>

<style scoped>

.addLeagueCard{
  margin: auto;
}

</style>
