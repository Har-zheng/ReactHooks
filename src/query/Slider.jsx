import React, { memo, useState, useMemo } from "react";
import PropTypes from "prop-types";
import "./Slider.css";
import leftPad from "left-pad";

const Slider = memo(function(props) {
  const {
    title,
    currentStartHours,
    currentEndHours,
    onStartChanged,
    onEndChanged
  } = props;
  const [start, setStart] = useState(() => (currentStartHours / 24) * 100);
  const [end, setEnd] = useState(() => (currentEndHours / 24) * 100);

  const startPercent = useMemo(() => {
    if (start > 100) {
      return 100;
    }
    if (start < 0) {
      return 0;
    }
    return start;
  }, [start]);
  const endPercent = useMemo(() => {
    if (end > 100) {
      return 100;
    }
    if (end < 0) {
      return 0;
    }
    return end;
  }, [end]);
  const startHours = useMemo(() => {
    return Math.round((startPercent * 24) / 100);
  }, [startPercent]);
  const endHours = useMemo(() => {
    return Math.round((endPercent * 24) / 100);
  }, [endPercent]);
  const startText = useMemo(() => {
    return leftPad(startHours, 2, "0") + ":00";
  }, [startHours]);
  const endText = useMemo(() => {
    return leftPad(endHours, 2, "0") + ":00";
  }, [endHours]);
  return (
      <div className="option">
          <h3>{title}</h3>
          <div className="range-slider">
              <div className="slider">
                  <div
            className="slider-range"
            style={{
              left: startPercent + "%",
              width: endPercent - startPercent + "%"
            }}
          ></div>
                  <i
            className="slider-handle"
            style={{
              left: startPercent + "%"
            }}
          >
                      <span>{startText}</span>
                  </i>
                  <i
            className="slider-handle"
            style={{
              left: endPercent + "%"
            }}
          >
                      <span>{endText}</span>
                  </i>
              </div>
          </div>
      </div>
  );
});
Slider.propTypes = {
  title: PropTypes.string.isRequired,
  currentStartHours: PropTypes.number.isRequired,
  currentEndHours: PropTypes.number.isRequired,
  onStartChanged: PropTypes.func.isRequired,
  onEndChanged: PropTypes.func.isRequired
};
export default Slider;
