import React, { Component } from 'react'
import { Form, Header, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../index.css'


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: ""
        }
    }

 

    render() {
        let { handleChange, email, password, login, handleSubmit } = this.props;
        return (
            <div class="form-card-wrapper">
                <h1 class="login-header">Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            onChange={handleChange}
                            value={email}
                            name="email"
                            label='Email'
                        />
                        <Form.Input
                            onChange={handleChange}
                            value={password}
                            name="password"
                            label='Password'
                        />
                        <Segment>
                            Not Registered? Sign Up
                <Link to='/diners/signup'>Here</Link>
                        </Segment>
                        <Button>Login</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }

}

export default LoginForm;
