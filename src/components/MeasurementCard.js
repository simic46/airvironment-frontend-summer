import React from "react";
import "../assets/styles/components/MeasurementCard.scss";
import {
  TemperatureSmallIcon,
  HumiditySmallIcon,
  PollutionSmallIcon,
  HighValueIcon,
  LowValueIcon,
} from "../assets/icons";

function MeasurementCard() {
  return (
    <div className="measurement-card-container">
      <div className="measurement-card-header">
        <span className="day">Wed</span>
        <span className="date">07.jul.2021</span>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <TemperatureSmallIcon />
          <div className="left-section-right-div">
            {/*<div className="left-subsection">? 30C°</div>*/}
            {/*<div className="left-subsection">? 22C°</div>*/}
            <div className="top">
              <HighValueIcon />
              <span className="pom">48</span>
              <span>C°</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">50</span>
              <span>C°</span>
            </div>
          </div>
        </div>
        <div className="right-section">/ 26C°</div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <HumiditySmallIcon />
          <div className="left-section-right-div">
            <div className="top">
              <HighValueIcon />
              <span className="pom">48</span>
              <span>%</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">50</span>
              <span>%</span>
            </div>
          </div>
        </div>
        <div className="right-section">/ 26%</div>
      </div>

      <div className="measurement-row">
        <div className="left-section">
          <PollutionSmallIcon />
          <div className="left-section-right-div">
            {/*<div className="left-subsection">*/}
            {/*  <HighValueIcon />*/}
            {/*  <span>0.78</span>*/}
            {/*  <span className="ppb">ppb</span>*/}
            {/*</div>*/}
            {/*<div className="left-subsection">*/}
            {/*  <span>?</span>*/}
            {/*  <span>0.78</span>*/}
            {/*  <span className="ppb">ppb</span>*/}
            {/*</div>*/}
            <div className="top">
              <HighValueIcon />
              <span className="pom">0.87</span>
              <span className="ppb">ppb</span>
            </div>
            <div className="bottom">
              <LowValueIcon />
              <span className="pom">0.21</span>
              <span className="ppb">ppb</span>
            </div>
          </div>
        </div>
        <div className="right-section">
          / 0.60<span className="ppb">ppb</span>
        </div>
      </div>
    </div>
  );
}
export default MeasurementCard;
