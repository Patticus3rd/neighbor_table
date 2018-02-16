import React from 'react'
import { Form, Header } from 'semantic-ui-react';

function SignUpForm(props) {
    return (
        <div>
            <Header> SignUp  </Header>
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
                <Form.Group>
                    <Form.Input
                        onChange={props.handleChange}
                        value={props.firstName}
                        name="firstName"
                        label="First Name"
                    />
                    <Form.Input
                        onChange={props.handleChange}
                        value={props.lastName}
                        name="lastName"
                        label="Last Name"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUpForm;