import React, { Component } from 'react'
//diners
import LoginFormContainer from './LoginForm';
import SignUpFormContainer from './SignUp';
import Experience from './Experience';
//chef routes
import ChefLoginFormContainer from './Chef/ChefLoginForm';
import ChefSignUpFormContainer from './Chef/ChefSignUp';
import Booking from './Chef/Booking';
import ExpForm from './Chef/ExpForm';
//pages
import LandingPage from './pages/LandingPage';
import { Switch, Route } from 'react-router-dom';
import { login, chefLogin, dinerSign, chefSign } from '../redux/actions/auth.js';
import { postCuisine } from '../redux/actions/cuisine.js'
import StaticLayout from './pages/StaticPage';
import Payment from './Payment';
import './index.css'



class App extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                <StaticLayout />
                </div>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/chefs/login' render={(props) => <ChefLoginFormContainer {...props} login={chefLogin} />} />
                    <Route path='/diners/login' render={(props) => <LoginFormContainer {...props} login={login} />} />
                    <Route path='/chefs/signup' render={(props) => <ChefSignUpFormContainer {...props} register={chefSign} />} />
                    <Route path='/diners/signup' render={(props) => <SignUpFormContainer {...props} />} register={dinerSign} />
                    <Route path='/chefs/bookings' component={Booking} />
                    <Route path='/diners/experience' component={Experience} />
                    <Route path='/chefs/expform'  render={(props) => <ExpForm {...props} />} add={postCuisine}/>
                    <Route path='/diners/payment' component={Payment} />
                </Switch>
            </div>
        )
    }
}

export default App;
