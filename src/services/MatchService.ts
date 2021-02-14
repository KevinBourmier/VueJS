import axios from "axios";
import {RouteParamValue} from "vue-router";

const api = 'http://localhost:3000/matchs'



class Matches {
    static getMatches() {
        return axios.get(api)
            .then((response)=> {
                return response.data
            })
            .catch((err)=> {
                console.log(err)
            })
    }
}

export default Matches

