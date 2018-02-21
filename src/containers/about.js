import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCuisine } from "../actions/index";
import { bindActionCreators } from "redux";
class About extends React.Component {
  renderList() {
    return this.props.styles.map(style => {
      return (
        <Link to="/cuisine">
          <li
            key={style.style}
            onClick={() => this.props.selectCuisine(style)}
            className="list-group-item"
          >
            {style.style}
          </li>
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="about-div">
        <Link to="/cuisine">
          <h1 className="about-text">Asian Style Chefs</h1>
          <div className="about" />

          <h1 className="about-text">Indian Style Chefs</h1>
          <div className="about-two" />

          <h1 className="about-text">Mexican Style Chefs</h1>
          <div className="about-three" />

          <h1 className="about-text">American Style Chefs</h1>
          <div className="about-four" />

          <h1 className="about-text">Cuban Style Chefs</h1>
          <div className="about-five" />

          <h1 className="about-text">Thai Style Chefs</h1>
          <div className="about-six" />

          <h1 className="about-text">Vegan Style Chefs</h1>
          <div className="about-seven" />

          <h1 className="about-text">Tapas Style Chefs</h1>
          <div className="about-eight" />
        </Link>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>

        <Link to="/">
          <button className="go-home">Go Home</button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //whatever is returned will show up as props
  return {
    styles: state.styles
  };
}

function mapDispatchToProps(dispatch) {
  //whenever selectcuisine is called the result should be passed to all of our reucers
  return bindActionCreators({ selectCuisine: selectCuisine }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
