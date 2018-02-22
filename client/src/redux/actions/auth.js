import axios from "axios";
import {setFlash } from './flash.js'

const authReducer = (prevState = { data: [], loading: true}, action) => {
    switch(action.type){
        case 'LOGIN':
        return {
            loading: false,
        }
        default: 
        return prevState;
    }
}

const logURL="http://localhost:9000/chefs/login/"
const chefURL ="http://localhost:9000/diners/login/"

const dinerSignUp = "http://localhost:9000/diners/signup/"
const chefSignUp = "http://localhost:9000/chefs/signup/"

export const login = (credentials) => {
    return function action(dispatch) {
        axios.post(logURL, credentials)
        .then(response => {
            dispatch(setFlash('Login Successful!', 'green'))
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
            dispatch(setFlash('Chef Login Successful!', 'green'))
           
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export const dinerSign = (credentials) => {
    return function action(dispatch){
        axios.post(dinerSignUp, credentials)
        .then(response => {
            dispatch(setFlash('Welcome to Neighbor Table!', 'green'))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const chefSign = (credentials) => {
    debugger
    return function action(dispatch){
        axios.post(chefSignUp, credentials)
        .then(response => {
            dispatch(setFlash('Welcome to NeighborTable Chef', 'green'))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export default authReducer;
