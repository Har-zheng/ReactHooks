import { connect } from 'react-redux'
import  React from 'react'
import './App.css'

import Header from '../common/Header.jsx';
import  DeparDate from './DeparDate.jsx';
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";

function App(props) {
    return (
        <div>
            <Header></Header>
            <Journey/>
            <DeparDate/>
            <HighSpeed/>
            <Submit/>
        </div>
    )

}
export default connect(function mapStateToProps(state) {
  return {};
    },
    function mapDispatchToProps(dispatch) {
  return {};
    }
    )(App);