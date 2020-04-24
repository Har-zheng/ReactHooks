import React from 'react'
import { connect } from "react-redux"
import Nav from '../common/Nav'
import List from "./List";
import Bottom from "./Bottom"
import { ACTION_SET_FROM } from './actions'

import "./App.css";

function App(props) {
    return <div>
        <Nav/>
        <List/>
        <Bottom/>
    </div>
}
export default connect(
  function mapStateToProps(state) {},
  function mapDispatchToProps(dispatch) {}
)(App);
