import React from "react";
import { connect } from "react-redux";
import Header from "../common/Header";
import Nav from "../common/Nav";
import List from "./List";
import Bottom from "./Bottom";

// import { ACTION_SET_FROM } from "./actions";

import "./App.css";

function App(props) {
  return (
      <div className="header-wrapper">
          <Nav />
          <List />
          <Bottom />
      </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
