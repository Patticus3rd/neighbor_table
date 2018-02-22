import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

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
                    <Form.Input name="expName" value={expName} />
                </Form.Group>
            </Form>
        )
    }
}
export default ExpForm;