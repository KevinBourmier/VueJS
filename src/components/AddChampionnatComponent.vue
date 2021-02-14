<template>
<div class="card col-md-6 addLeagueCard">
  <div class="card-header">
    Ajouter un championnat
  </div>
  <form
      v-if="step === 1"
      id="app"
      @submit="addLeague"
      method="post"
  >
  <div class="mb-3">
      <div class="form-input mt-3 mb-3">
        <input type="text" v-model="posts.leagueName" class="form-control" name="posts.leagueName" placeholder="Nom du championnat">
      </div>
    <button type="submit" class="btn btn-primary">Créer</button>
  </div>
  </form>
  <div v-if="step === 2" class="alert alert-success" role="alert">
    Championnat ajouté
  </div>
</div>
</template>

<script>
import axios from "axios";
const api = 'http://localhost:3000/league'

export default {
name: "addChampionnatComponent",
  data() {
    return {
      posts: {
        leagueName: '',
      },
      error: '',
      step: 1
    }
  },
  methods:{
    addLeague(e){
      try{
        axios.post(api, this.posts).then(result => {
            this.step = 2
        })
        e.preventDefault();
      } catch (error){
        this.error = error.message;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.addLeagueCard{
  margin: auto;

}

</style>
