import React, { useEffect, useState } from "react";
import { MeasurementCard } from "../components/index";
import "../assets/styles/components/Averages.scss";

function Averages() {
  const [fetchData, setFetchData] = useState({});
  useEffect(() => {
    fetch("https://airvironment.live/api/measurements?per_page=20").then(
      (response) => response.json().then((r) => setFetchData(r.response))
    );
  }, []);
  console.log(fetchData);

  const data = {
    dayName: "Wed",
    date: "24. jul 2021",
    //avg_temperature: 26,
    max_temperature: 30,
    min_temperature: 22,
    //avg_humidity: 48,
    min_humidity: 40,
    max_humidity: 56,
    //avg_pollution: 0.6,
    min_pollution: 0.5,
    max_pollution: 0.7,
  };
  return fetchData.length ? (
    <div className="average_container">
      {fetchData.map((card) => (
        <MeasurementCard data={data} fetchData={card} key={card.id} />
      ))}
    </div>
  ) : (
    <div />
  );
}
export default Averages;
