import React from 'react'
import { Header, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import './index.css';

const LandingPage = withRouter(({ history }) => (
  

    
    <div class="button-wrapper">
        <div class="page-wrapper">
            <h2 class="header-name">Neighbor Table</h2>
            <Header center>Sign In As A Chef or a Diner</Header>
            <Button onClick={() => { history.push('./chefs/login') }}>Chef</Button>
            <Button onClick={() => { history.push('./diners/login') }}>Diners</Button>
        </div>
    </div>
))
export default LandingPage;
