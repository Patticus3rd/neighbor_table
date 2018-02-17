import React from 'react'
import { Header, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const LandingPage = withRouter(({ history }) => (
    <div>
        <Button onClick={() => { history.push('./chefs/login') }}>Chef</Button>
        <Button onClick={() => { history.push('./diners/login') }}>Diners</Button>
    </div>

))
export default LandingPage;
