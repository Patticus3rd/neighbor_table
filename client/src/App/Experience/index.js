import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ExpCard from './ExpCard';
import { connect } from 'react-redux';
import axios from 'axios';
import { Card } from 'semantic-ui-react';

const cuisines = "http://localhost:9000/cuisines/";


class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: []
    }
  }
  componentDidMount() {
    axios.get(cuisines)
      .then((response) => {
        let { data } = response;
        console.log(data);
        this.setState({
          cuisines: data
        })
      })
  }

  render() {
    let { cuisines } = this.state;
    return (
      <div>
        <Card.Group>
        {cuisines.map((cuisine, id) => {
          return <ExpCard key={id}{...cuisine} index={id}/>
        })}
        </Card.Group>
      </div>
    );
  }
}


export default connect()(Experience);