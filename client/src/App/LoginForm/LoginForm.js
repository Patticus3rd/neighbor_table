import React from 'react'
import { Form, Header } from 'semantic-ui-react';

function LoginForm(props) {
    return(
        <div>
        <Header> Login  </Header>
        <Form>
            <Form.Input
                onChange={props.handleChange}
                value={props.email}
                name="email"
                label='Email'
            />
            <Form.Input
                onChange={props.handleChange}
                value={props.password}
                name="password"
                label='Password'
            />
        </Form>
        </div>
    )
}

export default LoginForm;
