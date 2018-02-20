import React from 'react'
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import './index.css';

function NavBar(props) {
    return (
        <div class="navbar-container">
            <Link className="text-link" to='/'>Home</Link>
            <Link className="text-link" to='/diners/login'>Diner Login</Link>
            <Link className="text-link" to='/chefs/login'>Chef Login</Link>
        </div>
    )
}

export default NavBar;
