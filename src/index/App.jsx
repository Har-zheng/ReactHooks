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
import DateSelector from "../common/DateSelector";
import { h0 } from "../common/fp";
import {
  exchangeFromTo,
  showCitySelector,
  hideCitySelector,
  fetchCityData,
  setSelectedCity,
  showDateSelector,
  hideDateSelector,
  setDepartDate,
  toggleHighSpeed
} from "./actions";

function App(props) {
  const {
    from,
    to,
    dispatch,
    isCitySelectorVisible,
    cityData,
    isLoadingCityData,
    departDate,
    isDateSelectorVisible,
    highSpeed
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

  const citySelectorCbs = useMemo(() => {
    return bindActionCreators(
      {
        onBack: hideCitySelector,
        fetchCityData,
        onSelect: setSelectedCity
      },
      dispatch
    );
  }, []);
  const departDateCbs = useMemo(() => {
    return bindActionCreators(
      {
        onClick: showDateSelector
      },
      dispatch
    );
  }, []);
  const dateSelectorCbs = useMemo(
    () =>
      bindActionCreators(
        {
          onBack: hideDateSelector
        },
        dispatch
      ),
    []
  );
  const onSelectDate = useCallback(day => {
    if (!day) {
      return;
    }
    if (day < h0()) {
      return;
    }
    dispatch(setDepartDate(day));
    dispatch(hideDateSelector());
  }, []);

  const highSpeedCbs = useMemo(() => {
    return bindActionCreators(
      {
        toggle: toggleHighSpeed
      },
      dispatch
    );
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
          <form className="form" action="./query.html">
              <Journey from={from} to={to} {...cbs} />
              <DeparDate time={departDate} {...departDateCbs} />
              <HighSpeed highSpeed={highSpeed} {...highSpeedCbs} />
              <Submit />
          </form>

          <CitySelector
        show={isCitySelectorVisible}
        cityData={cityData}
        isLoading={isLoadingCityData}
        {...citySelectorCbs}
      />
          <DateSelector
        show={isDateSelectorVisible}
        {...dateSelectorCbs}
        onSelect={onSelectDate}
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
