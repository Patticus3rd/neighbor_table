import React from 'react'
import { Header, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const LandingPage = withRouter(({ history }) => (
    <div>
        <Header>Sign In As A Chef or a Diner</Header>
        <Button onClick={() => { history.push('./chefs/login') }}>Chef</Button>
        <Button onClick={() => { history.push('./diners/login') }}>Diners</Button>
    </div>

))
export default LandingPage;
