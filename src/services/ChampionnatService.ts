import axios from "axios";
import {RouteParamValue} from "vue-router";

const api = 'http://localhost:3000/league'



class Leagues {
    static getLeagues() {
        return axios.get(api)
            .then((response)=> {
                return response.data
            })
            .catch((err)=> {
                console.log(err)
            })
    }

    static getOneLeague(id: string | RouteParamValue[]){
        return axios.get(api + "/" + id).then(
            (response) => {
                return response.data
            }
        )
            .catch((err)=> {
                console.log(err)
            })
    }

    static deleteLeague(id: String) {
        return axios.post(api + '/delete', {leagueID: id}).then((response) => {
            if (response.status === 200) {
                return response
            }
        }).catch((err)=> {
            console.log(err)
        })
    }
}

export default Leagues

