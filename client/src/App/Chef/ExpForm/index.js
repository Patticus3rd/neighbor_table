import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class ExpForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                expName: "",
                expCity: "",
                expState: "",
                price: ""
            }
        }
    }
    render(){
         let { expName, expCity, expState, price } = this.state;
        return(
            <Form>
                <Form.Group>
                    <Form.Input label="Cuisine Name" name="expName" value={expName} />
                    <Form.Input label="City" name="expCity" value={expCity} />
                    <Form.Input label="State" name="expState" value={expState} />
                    <Form.Input label="Price" name="price" value={price} />
                    <Button>Submit </Button>
                </Form.Group>
            </Form>
        )
    }
}
export default ExpForm;