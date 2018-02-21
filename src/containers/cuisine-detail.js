import React, { Component } from "react";
import { connect } from "react-redux";

class Cuisine extends Component {
  render() {
      if(!this.props.cuisine) {
          return <div>select</div>
      }
    return (
      <div>
        <h3>Details for: </h3>
        <div>{this.props.cuisine.style}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cuisine: state.ActiveCuisine
  };
}

export default connect(mapStateToProps)(Cuisine);
