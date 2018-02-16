import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import LoginForm from './LoginForm';

class LoginFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: ""
            }
        }
    }
    handleChange(e){
        e.persist();
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [e.target.name]: e.target.value
                }
            }
        })
    }
    clearInputs(){
        this.setState({
            inputs: {
                email: "",
                password: ""
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(this.state.inputs))
        this.clearInputs();
    }
    
    render() {
        return (
            <LoginForm
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            {...this.state.iputs}/>
        )
    }

}

export default LoginFormContainer;
