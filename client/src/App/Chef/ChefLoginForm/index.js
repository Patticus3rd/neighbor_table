import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import ChefLoginForm from './ChefLoginForm.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { login } from '../../redux/actions/auth.js'

class ChefLoginFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                email: "",
                password: ""
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
                password: ""
            }
        })
    }

    handleSubmit(e) {
        let { login, history } = this.props;
        e.preventDefault();
        login(this.state.inputs);
        alert(JSON.stringify(this.state.inputs))
        history.push('/chefs/bookings')
    }

    render() {
        return (
            <div class="form-wrapper">


                <ChefLoginForm
                    handleChange={this.handleChange.bind(this)}
                    handleSubmit={this.handleSubmit.bind(this)}
                    {...this.state.inputs} />
            </div>
        )
    }

}


export default connect(null)(ChefLoginFormContainer);
