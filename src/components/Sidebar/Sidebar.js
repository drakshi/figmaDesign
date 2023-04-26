/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState('hidden');
  return (
    <>
      <nav className="md:left-15 rounded-lg md:block md:fixed md:top-10 md:bottom-10 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-black flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-2 py-4 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-black m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 font-bold text-white mr-0 inline-block whitespace-nowrap text-lg uppercase p-4 px-2"
            to="/"
          >
            Board.
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">

            </li>
            <li className="inline-block relative">

            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-white
 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-2"
                    to="/"
                  >
                    Board.
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-3000 text-white bg-black rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>


            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-white hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-chart-pie mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
            </ul>



            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-white hover:text-blueGray-500 text-xs uppercase py-3 block"
                  to="/auth/login"
                >
                  <i className="fas fa-tags text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Transactions
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-white hover:text-blueGray-500 text-xs uppercase py-3 block"
                  to="/auth/login"
                >
                  <i className="fas fa-calendar-week text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Schedule
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-white hover:text-blueGray-500 text-xs uppercase py-3 block"
                  to="/auth/login"
                >
                  <i className="fas fa-users text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Users
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className="text-white hover:text-blueGray-500 text-xs uppercase py-3 block"
                  to="/auth/login"
                >
                  <i className="fas fa-cog text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Settings
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
