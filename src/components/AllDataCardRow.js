import React from "react";
import useDates from "../hooks/useDates";

const AllDataCardRow = ({ measurements }) => {
  const { returnDay } = useDates();
  return (
    <>
      <div className="date-time-wrapper">{returnDay(measurements.created)}</div>
      <div className="values">{Math.round(measurements.temperature)}&deg;C</div>
      <div className="values">{Math.round(measurements.humidity)}%</div>
      <div className="values">
        {Math.round(measurements.pollution) / 100}ppb
      </div>
    </>
  );
};

export default AllDataCardRow;
