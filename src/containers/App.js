import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-page">
          <h1 className="home-page-title">Neighbor Table</h1>
        </div>
        <Link to="/about">
          <button className="button">Find Local Chefs</button>
        </Link>
      </div>
    );
  }
}

export default connect(state => state)(App);
