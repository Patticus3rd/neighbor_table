import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class LoginForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: ""
            }
        }
    }

    
    render() {
        return (
            <Form>
                <Form.Input label='Email' />
                <Form.Input label='Password' />
            </Form>
        )
    }

}

export default LoginForm;
