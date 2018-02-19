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

export const login = (credentials) => {
    return function action(dispatch) {
        axios.post(logURL, credentials)
        .then(response => {
            console.log(response.data)
            alert('login in is good')
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default authReducer;
