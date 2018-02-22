import React from 'react'
import { Image, Card, Button, Icon } from 'semantic-ui-react';

function ExpCard(props) {
    let { expName, expcity, expState, expChef, price } = props;
    return (
        <Card fluid>
            <Card.Header>
                {expName} In: {expState}
            </Card.Header>
            <Card.Description>
                ${price}
            </Card.Description>
        </Card>
    )
}

export default ExpCard
