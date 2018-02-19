import React from 'react'
import { Form, Header, Button } from 'semantic-ui-react';

function SignUpForm(props) {
    return (
        <div>
            <Header> SignUp as a Chef </Header>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group>
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
                </Form.Group>
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
                <Form.TextArea label='About' placeholder='Tell us more about you...' />
                <Button>Sign Up!</Button>
            </Form>
        </div>
    )
}

export default SignUpForm;