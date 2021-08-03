import React from "react";
import moment from "moment";
import "../assets/styles/components/MeasurementCard.scss";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons";

function MeasurementCard({ averageValue }) {
  return (
    <div className="measurement-card-container">
      <div className="measurement-card-header">
        <span className="day">
          {" "}
          {moment(averageValue.date, "DD.M.YYYY.").format("ddd")}
        </span>
        <span className="date">
          {" "}
          {moment(averageValue.date, "DD.M.YYYY.").format("DD. MMM. YYYY.")}
        </span>
      </div>
      <div className="measurement-row">
        <div className="left-section">
          <TemperatureSmallIcon />
          <div className="left-section-right-div">
            {/*<div className="left-subsection">? 30C°</div>*/}
            {/*<div className="left-subsection">? 22C°</div>*/}
            <div className="top">
              <HighValueIcon />
              <span className="pom">{averageValue.maxTemperature}</span>
              <span>C°</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{averageValue.minTemperature}</span>
              <span>C°</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / {parseInt(averageValue.averageTemperature).toFixed(0)}C°
        </div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <HumiditySmallIcon />
          <div className="left-section-right-div">
            <div className="top">
              <HighValueIcon />
              <span className="pom">{averageValue.maxHumidity}</span>
              <span>%</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{averageValue.minHumidity}</span>
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / {parseInt(averageValue.averageHumidity).toFixed(0)}%
        </div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <PollutionSmallIcon />
          <div className="left-section-right-div">
            <div className="top">
              <HighValueIcon />
              <span className="pom">{averageValue.maxPollution}</span>
              <span className="ppb">ppb</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{averageValue.minPollution}</span>
              <span className="ppb">ppb</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / {averageValue.averagePollution}
          <span className="ppb">ppb</span>
        </div>
      </div>
    </div>
  );
}
export default MeasurementCard;
