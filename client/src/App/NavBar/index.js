import React from 'react'
import { Link } from 'react-router-dom';

function NavBar(props) {
    return (
        <div>
            <Link to='/diners/login'>Login</Link>
        </div>
    )
}

export default NavBar;
