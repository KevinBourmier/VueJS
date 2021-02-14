import axios from "axios";
import {RouteParamValue} from "vue-router";

const api = 'http://localhost:3000/league'
const apiTeam = 'http://localhost:3000/teams'



class Teams {
    static getTeams() {
        return axios.get(apiTeam)
            .then((response)=> {
                return response.data
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    static getOneTeam(id: string | RouteParamValue[]){
        return axios.get(apiTeam + "/" + id).then(
            (response) => {
                return response.data
            }
        )
            .catch((err)=> {
                console.log(err)
            })
    }

}

export default Teams

