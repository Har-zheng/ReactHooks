import { connect } from "react-redux";
import React, { useCallback, useMemo } from "react";
import "./App.css";
import { bindActionCreators } from "redux";

import Header from "../common/Header.jsx";
import DeparDate from "./DeparDate.jsx";
import HighSpeed from "./HighSpeed";
import Journey from "./Journey";
import Submit from "./Submit";
import CitySelector from "../common/CitySelector";

import { exchangeFromTo, showCitySelector } from "./actions";

function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectVisible,
    cityData,
    isLoadingCityData
  } = props;
  const onBack = useCallback(() => {
    window.history.back();
  }, []);
  const doExchangeFromTo = useCallback(() => {
    dispatch(exchangeFromTo());
  }, []);
  const doShowCitySelector = useCallback(m => {
    dispatch(showCitySelector(m));
  }, []);
  const cbs = useMemo(() => {
    return bindActionCreators(
      {
        exchangeFromTo,
        showCitySelector
      },
      dispatch
    );
  }, []);
  return (
      <div>
          <div className="header-weapper">
              <Header title="火车票" onBack={onBack}></Header>
          </div>
          <form className="form">
              <Journey from={from} to={to} {...cbs} />
              <DeparDate />
              <HighSpeed />
              <Submit />
          </form>
          <CitySelector
        show={isCitySelectVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
      />
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
