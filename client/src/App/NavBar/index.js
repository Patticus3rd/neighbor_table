import React from 'react'
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

function NavBar(props) {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/diners/login'>Login</Link>
        </div>
    )
}

export default NavBar;
