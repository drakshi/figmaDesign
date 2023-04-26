import React from "react";
import { useEffect } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard() {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => console.log(response.json()))
      .then((actualData) => console.log(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">

        <div className="w-full xl:w-6/12 px-4">
          <CardSocialTraffic />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
      </div>
    </>
  );
}
