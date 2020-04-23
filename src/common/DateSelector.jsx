import React from "react";
import "./DateSelector.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import Header from "./Header";
function Day(props) {
  const { day, onSelect } = props;
  return <td></td>;
}
function Week(props) {
  const { days, onSelect } = props;
  return <div></div>;
}
Week.propTypes = {
  days: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
};
function Month(props) {
  const { startingTimeInMonth, onSelect } = props;
  const startDay = new Date(startingTimeInMonth);
  const currentDay = new Date(startingTimeInMonth);
  let days = [];
  while (currentDay.getMonth() === startingTimeInMonth) {
    days.push(currentDay.getTime());
    currentDay.setDate(currentDay.getDate() + 1);
  }
  days = new Array(startDay.getDate() ? startDay.getDay() - 1 : 6)
    .fill(null)
    .concat(days);
  const lastDate = new Date(days[days.length - 1]);
  days = days.concat(
    new Array(lastDate.getDay() ? 7 - lastDate.getDay() : 0).fill(null)
  );

  const weeks = [];
  for (let row = 0; row < days.length / 7; ++row) {
    const week = days.slice(row * 7, (row + 1) * 7);
    weeks.push(week);
  }
  return (
      <table className="date-table">
          <thead>
              <tr>
                  <td colSpan="7">
                      <h5>
                          {startDay.getFullYear()} 年{startDay.getMonth() + 1}月
                      </h5>
                  </td>
              </tr>
          </thead>
          <tbody>
              <tr className="date-table-weeks">
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th className="weekend">周六</th>
                  <th className="weekend">周日</th>
              </tr>
              {weeks.map((week, idx) => {
          return <Week key={idx} days={week} onSelect={onSelect} />;
        })}
          </tbody>
      </table>
  );
}
Month.propTypes = {
  startingTimeInMonth: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default function DateSelector(props) {
  const { show, onSelect, onBack } = props;
  const now = new Date();
  now.setHours(0);
  now.setMinutes(0);
  now.setSeconds(0);
  now.setMilliseconds(0);
  now.setDate(1);

  const monthSequence = [now.getTime()];

  now.setMonth(now.getMonth() + 1);

  monthSequence.push(now.getTime());
  now.setMonth(now.getMonth() + 1);

  monthSequence.push(now.getTime());

  return (
      <div className={classNames("date-selector", { hidden: !show })}>
          <Header onBack={onBack} title="日期选择" />
          <div className="date-selector-tables">
              {monthSequence.map(month => {
          return (
              <Month
              key={month}
              onSelect={onSelect}
              startingTimeInMonth={month}
            />
          );
        })}
          </div>
      </div>
  );
}
DateSelector.propTypes = {
  show: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
