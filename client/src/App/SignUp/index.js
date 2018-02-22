import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import { dinerSign } from '../../redux/actions/auth.js';

class SignUpFormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                profession: "",
                aboutMe: ""
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
                password: "",
                firstName: "",
                lastName: "",
                profession: "",
                aboutMe: ""
            }
        })
    }

    handleSubmit(e){
        let { dinerSign } = this.props;
        e.preventDefault();
        dinerSign(this.state.inputs)
        this.clearInputs();
    }
    
    render() {
        return (
            <SignUpForm
            handleChange={this.handleChange.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
            {...this.state.inputs}/>
        )
    }

}

export default connect(null, ({ dinerSign})) (SignUpFormContainer);