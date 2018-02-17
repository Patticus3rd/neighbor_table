import React, { Component } from 'react'
import LoginFormContainer from './LoginForm';
import SignUpFormContainer from './SignUp';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'




class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/chefs/login' component={LoginFormContainer}/>
                    <Route path='/diners/login' component={LoginFormContainer}/>
                </Switch>
            </div>
        )
    }
}

export default App;
