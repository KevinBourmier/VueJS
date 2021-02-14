<template>
    <div class="card col-md-6 addLeagueCard">
        <div class="card-header">
            Ajouter un joueur à l'équipe {{team.name}}
        </div>
        <form
                id="app"
                @submit="addPlayerToTeam"
                method="post"
        >
            <div class="mb-3">
                <div class="form-input mt-3 mb-3">
                    <input type="text" class="form-control" v-model="post.player.firstName" name="post.player.firstName" placeholder="Prénom du joueur">
                </div>
                <div class="form-input mt-3 mb-3">
                    <input type="text" class="form-control" v-model="post.player.lastName" name="post.player.lastName" placeholder="Nom du joueur">
                </div>
                <button type="submit" class="btn btn-primary">Créer</button>
            </div>
        </form>
    </div>
</template>
<script>
    import TeamService from "../services/TeamService.ts";
    const api = 'http://localhost:3000/teams/';
    import axios from "axios";


    export default {
        name: "addPlayerToTeamComponent",

        data(){
            return{
                team: [],
                post: {
                    player: {
                        firstName: '',
                        lastName: ''
                    }
                }
            }
        },
        async created(){
            try {
                this.team = await TeamService.getOneTeam(this.$route.params.id)
            }catch (e) {
                console.log(e.message);
            }
        },

        methods: {
            addPlayerToTeam(e) {
                try {
                    axios.post(api + this.$route.params.id, this.post).then(res => {
                    })
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
