import React from "react";
import "../assets/styles/components/AllDataCard.scss";
import { TemperatureIcon, HumidityIcon, PollutionIcon } from "../assets/icons";
import AllDataCardRow from "./AllDataCardRow";
import useDates from "../hooks/useDates";

const AverageCard = ({ measurementsByDay }) => {
  const { returnDay, returnDate } = useDates();
  return (
    <div className="all-data-row">
      <div className="header-row">
        <div className="date-time-wrapper">
          <div className="day">{returnDay(measurementsByDay[0].created)}</div>
          <div className="date">{returnDate(measurementsByDay[0].created)}</div>
        </div>
        <div className="data-icon-wrapper">
          <TemperatureIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <HumidityIcon className="data-icon" />
        </div>
        <div className="data-icon-wrapper">
          <PollutionIcon className="data-icon" />
        </div>
      </div>
      <div className="hour-data">
        {measurementsByDay.map((measurements) => (
          <AllDataCardRow measurements={measurements} key={measurements.id} />
        ))}
      </div>
    </div>
  );
};

export default AverageCard;
