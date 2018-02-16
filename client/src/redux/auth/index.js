import axios from "axios";

// export function signup(credentials) {
//     return dispatch => {
//         axios.post("/chefs/signup", credentials)
//             .then(response => {
//                 console.log(response.data);
//             })
//             .catch(err => {
//                 console.error(err);
//             })
//     }
// }

export default function login(credentials){
    return dispatch => {
        axios.post('/chefs/login', credentials)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err)
        })
    }
}