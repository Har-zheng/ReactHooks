import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./DeparDate.css";
import { h0 } from "../common/fp";
import dayjs from "dayjs";

export default function DepartDate(props) {
  const { time, onClick } = props;
  const h00fDepart = h0(time);
  const departDate = new Date(h00fDepart);
  const departDateString = useMemo(() => {
    return dayjs(time).format("YYYY-MM-DD");
  }, [h00fDepart]);

  const isToday = h00fDepart === h0();

  const weekString =
    "周" +
    ["日", "一", "二", "三", "四", "五", "六", "七"][departDate.getDay()] +
    (isToday ? "(今天)" : "");
  return (
      <div className="depart-date" onClick={onClick}>
          <input type="hidden" name="date" value={departDateString} />
          {departDateString} <span className="depart-week">{weekString}</span>
      </div>
  );
}
DepartDate.propTypes = {
  time: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
