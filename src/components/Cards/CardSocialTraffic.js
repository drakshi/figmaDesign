import React, { useEffect } from "react";
import Chart from "chart.js";


// components

export default function CardSocialTraffic() {
  useEffect(() => {
    const config = {
      type: 'pie',
      data: data,
      options: {
        legend: {
          display: false
        }
      }
    };
    var ctx = document.getElementById("pie-chart").getContext("2d");
    ctx.width = 4000;
    ctx.height = 4000;
    window.myLine = new Chart(ctx, config);
  }, []);

  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'Top products',
      data: [300, 50, 100],
      backgroundColor: [
        '#99D89F',
        '#F6DD7C',
        '#EF8485'
      ],
      hoverOffset: 4
    }]
  };
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-sm">
        <div className="rounded-sm mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Top products
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              <button
                className="text-blueGray-300 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                May - june 2021
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap mt-4">

          <div className="w-full xl:w-6/12 px-8 py-8">
            <canvas id="pie-chart" height="80px" width="80px"></canvas>
          </div>
          <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4 py-4">
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className=" inline-block py-2 px-2 uppercase rounded-full text-lightBlue-600 mr-3" style={{ backgroundColor: '#99D895' }}>

                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Basic Tees
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-lightBlue-600  mr-3" style={{ backgroundColor: '#F6DD7C' }}>

                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Custom short Pants
                    </h4>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-2 px-2 uppercase rounded-full text-lightBlue-600  mr-3" style={{ backgroundColor: '#EF8485' }} >

                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500">
                      Super Hoodies
                    </h4>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
