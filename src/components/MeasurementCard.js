import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons";

function MeasurementCard({ data, fetchData }) {
  return (
    <div className="measurement-card-container">
      <div className="measurement-card-header">
        <span className="day">{data.dayName}</span>
        <span className="date">{data.date}</span>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <TemperatureSmallIcon />
          <div className="left-section-right-div">
            {/*<div className="left-subsection">? 30C°</div>*/}
            {/*<div className="left-subsection">? 22C°</div>*/}
            <div className="top">
              <HighValueIcon />
              <span className="pom">{data.max_temperature}</span>
              <span>C°</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{data.min_temperature}</span>
              <span>C°</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / {fetchData.temperature.toFixed(0)}C°
        </div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <HumiditySmallIcon />
          <div className="left-section-right-div">
            <div className="top">
              <HighValueIcon />
              <span className="pom">{data.max_humidity}</span>
              <span>%</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{data.min_humidity}</span>
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="right-section">/ {fetchData.humidity.toFixed(0)}%</div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <PollutionSmallIcon />
          <div className="left-section-right-div">
            <div className="top">
              <HighValueIcon />
              <span className="pom">{data.max_pollution}</span>
              <span className="ppb">ppb</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">{data.min_pollution}</span>
              <span className="ppb">ppb</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / {fetchData.pollution}
          <span className="ppb">ppb</span>
        </div>
      </div>
    </div>
  );
}
export default MeasurementCard;
