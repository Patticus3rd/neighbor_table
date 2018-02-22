import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import LoginForm from './LoginForm.js';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth.js'
import { withRouter } from 'react-router-dom';
import '../index.css'

class LoginFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: ""
            },
            redirect: false
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
        let { login, history } = this.props;
        e.preventDefault();
        login(this.state.inputs);
        this.clearInputs();
        history.push('/diners/experience')
    }
    
    render() {
        return (
            <div class="form-wrapper">
           
            <LoginForm
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            {...this.state.inputs}/>
                 
            </div>
        )
    }

}

export default connect(null, ({ login })) (LoginFormContainer);
