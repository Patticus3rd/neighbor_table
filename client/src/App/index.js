import React, { Component } from 'react'
//diners
import LoginFormContainer from './LoginForm';
import SignUpFormContainer from './SignUp';
//chef routes
import ChefLoginFormContainer from './Chef/ChefLoginForm';
import ChefSignUpFormContainer from './Chef/ChefSignUp';
//pages
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { login } from '../redux/actions/auth.js';
import StaticLayout from './pages/StaticPage';



class App extends Component {
    render() {
        return (
            <div>
                <StaticLayout />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/chefs/login' render={(props) => <ChefLoginFormContainer {...props} login={login} />} />
                    <Route path='/diners/login' render={(props) => <LoginFormContainer {...props} login={login} />} />
                    <Route path='/chefs/signup' render={(props) => <ChefSignUpFormContainer {...props} />} />
                    <Route path='/diners/signup' render={(props) => <SignUpFormContainer {...props} />} />
                </Switch>
            </div>
        )
    }
}

export default App;
