import React, { useEffect } from "react";
import { MeasurementCard } from "../components/index";
import "../assets/styles/components/Averages.scss";
import { loadAverageValues } from "../redux/actions/averageActions";
import { connect } from "react-redux";

function Averages({ averageValues, getAverageValues }) {
  useEffect(() => {
    const params = {
      all: true,
    };
    getAverageValues(params);
  }, [getAverageValues]);

  return averageValues ? (
    <div className="average_container">
      {averageValues.map((averageValue) => (
        <MeasurementCard averageValue={averageValue} key={averageValue.date} />
      ))}
    </div>
  ) : (
    <div />
  );
}

function mapStateToProps(state) {
  return {
    averageValues: state.averageValues ? state.averageValues : [],
  };
}

const mapDispatchToProps = {
  getAverageValues: loadAverageValues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Averages);
