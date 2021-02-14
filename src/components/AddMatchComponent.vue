<template>
    <div v-if="teams.length >= 2">
    <div class="card col-md-6 addLeagueCard">
        <div class="card-header">
            Ajouter un match
        </div>
        <form
                id="app"
                @submit="addMatch"
                method="post"

        >
            <div class="mb-3 mt-3">
                <div class="form-input mt-3 mb-3">
                    <label class="form-label">Equipe à domicile</label>
                    <select class="form-control" v-model="posts.matchs.homeTeam" name="posts.matchs.homeTeam"
                >
                    <option
                            v-for="(team, index) in teams"
                            v-bind:item="team"
                            v-bind:index="index"
                            v-bind:value="team.name"
                            v-bind:key="team._id"
                    >
                        {{team.name}}
                    </option>
                </select>
                </div>
                <div class="form-input mt-3 mb-3">
                    <label class="form-label">Equipe à l'éxterieur</label>
                    <select class="form-control" v-model="posts.matchs.awayTeam" name="posts.matchs.awayTeam"
                    >
                        <option
                                v-for="(team, index) in teams"
                                v-bind:item="team"
                                v-bind:index="index"
                                v-bind:value="team.name"
                                v-bind:key="team._id"
                        >
                            {{team.name}}
                        </option>
                    </select>
                </div>
                <div class="form-input mt-3 mb-3">
                    <input type="text" class="form-control" v-model="posts.matchs.scoreHome" name="posts.matchs.scoreHome" placeholder="Score équipe à domicile">
                </div>
                <div class="form-input mt-3 mb-3">
                    <input type="text" class="form-control" v-model="posts.matchs.scoreAway" name="posts.matchs.scoreAway" placeholder="Score équipe à l'exterieur">
                </div>

                <button type="submit" class="btn btn-primary mt-3">Ajouter</button>
            </div>
        </form>
        </div>
    </div>
    <div v-if="teams.length < 2" class="card-header col-lg-6 mx-auto bg-primary">
        <h3 class="mx-auto" style="color: white">Il vous faut au moins 2 équipes pour créer un match</h3>
    </div>
</template>

<script>
    import TeamsService from '../services/TeamService.ts';
    import axios from "axios";
    import ChampionnatService from "@/services/ChampionnatService";
    const api = "http://localhost:3000/league/match/";
    const apiTeams = 'http://localhost:3000/league/allTeams'


    export default {
        name: "AddMatchComponent",

        data(){
            return {
                league: [],
                teams: [],
                posts: {
                    matchs : {
                        homeTeam: '',
                        awayTeam: '',
                        scoreHome: '',
                        scoreAway: ''
                    }
                }
            }
        },

        async created(){
            try{
              this.league = await ChampionnatService.getOneLeague(this.$route.params.id);
              axios.post(apiTeams, {leaguesId: this.league.teams}).then((response) => {
                this.teams = response.data
              })
            }catch (e) {
                return e.message;
            }
        },

        methods:{
            addMatch(e) {
                try {
                    axios.post(api + this.$route.params.id, this.posts)
                } catch (error){
                    console.log(error);
                }
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .addLeagueCard{
        margin: auto;
    }
</style>
