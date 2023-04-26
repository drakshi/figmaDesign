import React from "react";

// components

export default function CardPageVisits() {
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

        <div className="flex flex-wrap ">


          <div className="w-full  mb-12 xl:mb-0 px-4 py-4">
            <ul className="list-none mt-6">
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className=" inline-block py-10 px-1 uppercase  text-lightBlue-600 mr-3" style={{ backgroundColor: '#99D895' }}>

                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500 font-semibold">
                      Meeting with suppliers from kuta beli
                    </h4>
                    <p className="text-blueGray-400">
                      14:00 - 15:00
                    </p>
                    <p className="text-blueGray-400">
                      at sunset road, kutta beli
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-2">
                <div className="flex items-center">
                  <div>
                    <span className="text-xs font-semibold inline-block py-10 px-1 uppercase  text-lightBlue-600  mr-3" style={{ backgroundColor: '#6973C2' }}>

                    </span>
                  </div>
                  <div>
                    <h4 className="text-blueGray-500 font-semibold">
                      Meeting with suppliers from kuta beli
                    </h4>
                    <p className="text-blueGray-400">
                      14:00 - 15:00
                    </p>
                    <p className="text-blueGray-400">
                      at sunset road, kutta beli
                    </p>
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
