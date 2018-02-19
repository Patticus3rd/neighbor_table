import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import SignUpForm from './SignUpForm';

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
        e.preventDefault();
        alert(JSON.stringify(this.state.inputs))
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

export default ChefSignUpFormContainer;