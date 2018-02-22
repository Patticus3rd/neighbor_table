import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { postCuisine } from '../../../redux/actions/cuisine.js'
import { connect } from 'react-redux';
import './index.css';

class ExpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                expName: "",
                expCity: "",
                expState: "",
                price: "",
                pictures: ""
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        this.setState({
            inputs: {
                expName: "",
                expCity: "",
                expState: "",
                price: "",
                pictures: ""
            }
        })
    }

    handleSubmit(e) {
        let { postCuisine } = this.props;
        postCuisine(this.state.inputs)
        this.clearInputs()
    }

    render() {
        let { expName, expCity, expState, price, pictures } = this.state;
        return (
            <div class="form-wrapper">
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Input onChange={this.handleChange} label="Cuisine Name" name="expName" value={expName} />
                    <Form.Input onChange={this.handleChange} label="City" name="expCity" value={expCity} />
                    <Form.Input onChange={this.handleChange} label="State" name="expState" value={expState} />
                    <Form.Input onChange={this.handleChange} label="Price" name="price" value={price} />
                    <Form.Input onChange={this.handleChange} label="Picture" name="pictures" value={pictures} />
                    <Button>Submit </Button>
                </Form.Group>
            </Form>   
            </div>
        )
    }
}
export default connect(null, ({ postCuisine }))(ExpForm);