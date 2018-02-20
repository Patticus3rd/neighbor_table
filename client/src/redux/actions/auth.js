import axios from "axios";

const authReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
        case 'LOGIN':
        return {
            loading: false,
        };
        default: 
        return prevState;
    }
}

const logURL="http://localhost:9000/chefs/login/"
const chefURL ="http://localhost:9000/diners/login/"

export const login = (credentials) => {
    return function action(dispatch) {
        axios.post(logURL, credentials)
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const chefLogin = (credentials) => {
    return function action(dispatch) {
        axios.post(chefURL, credentials)
        .then(response => {
            console.log(response.data)
           
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default authReducer;
