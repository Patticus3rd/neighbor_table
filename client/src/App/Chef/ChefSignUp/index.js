import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';
import { connect } from 'react-redux';
import {chefSign} from '../../../redux/actions/auth.js'

class ChefSignUpFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: "",
                firstName: "",
                chefStory: ""
            }
        }
        this.clearInputs = this.clearInputs.bind(this)
    }
    handleChange(e) {
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
    clearInputs() {
        debugger
        this.setState({
            inputs: {
                email: "",
                password: "",
                firstName: "",
                chefStory: ""
            }
        })
    }

    handleSubmit(e) {
        let { chefSign } = this.props;
        e.preventDefault();
        chefSign(this.state.inputs)
        this.clearInputs();
    }

    render() {
        return (
            <SignUpForm
                handleChange={this.handleChange.bind(this)}
                handleSubmit={this.handleSubmit.bind(this)}
                {...this.state.iputs} />
        )
    }

}

export default connect(null, {chefSign}) (ChefSignUpFormContainer);