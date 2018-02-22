import React, { Component } from 'react'
import { Form, Header, Button } from 'semantic-ui-react';


function SignUpForm(props) {
    let { handleSubmit, handleChange, email, password, firstName, lastName, profession, aboutMe } = props;
    return (
        <div>
            <Header> SignUp as a Diner </Header>
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
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        onChange={handleChange}
                        value={firstName}
                        name="firstName"
                        label="First Name"
                    />
                    <Form.Input
                        onChange={handleChange}
                        value={lastName}
                        name="lastName"
                        label="Last Name"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        onChange={handleChange}
                        value={profession}
                        name="profession"
                        label="What is your profession?"
                    />
                </Form.Group>
                <Form.TextArea
                    name='aboutMe'
                    value={aboutMe}
                    onChange={handleChange}
                    label='About'
                    placeholder='Tell us more about you...' />
                <Button>Sign Up!</Button>
            </Form>
        </div>
    )
}



export default SignUpForm;