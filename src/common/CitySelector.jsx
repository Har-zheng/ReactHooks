import React, { Component } from "react";
import "./CitySelector.css";
import classname from "classnames";
export default function CitySelector(props) {
  const { show, cityData, isLoading } = props;
  classname("city-selector", {
    hidden: !show
  });
  return (
      <div className={classname("city-selector", { hidden: !show })}>
          <div className="city-search">
              <div className="search-back">
                  <svg width="42" height="42">
                      <polyline
              points="25,13 16,21 25,29"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
                  </svg>
              </div>
              <div></div>
          </div>
      </div>
  );
}
