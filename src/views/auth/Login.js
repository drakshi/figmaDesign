import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import Dashboard from "views/admin/Dashboard";

export default function Login() {

  const responseMessage = (response) => {
    console.log("response : " + response);
    window.location.href = 'http://localhost:3000/admin/dashboard';
  };
  const errorMessage = (error) => {
    console.log(error);
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4 bg-black"></div>

          <div className="w-full lg:w-4/12 px-4">
            <div className="googleb"></div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg bg-white border-0">
              <div className=" mb-0 px-6 py-6 bg-offwhite">
                <div className=" mb-3">
                  <h3 className="text-black text-xl font-bold">
                    Sign in
                  </h3>
                  <h6 className="text-black">
                    Sign in to your account
                  </h6>
                </div>
                <div className="btn-wrapper">
                  <button
                    className=" google-button text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase  hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                    type="button"
                  >

                    <GoogleLogin onSuccess={() => window.location.href = 'http://localhost:3000/admin/dashboard'} onError={errorMessage} />
                  </button>

                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form>
                  <div className="relative w-full mb-3 py-2 ">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600 text-left">
                        Forgot password?
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white rounded-sm active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
/*client id : 233494798175-lqup49mf9fonfkjtjca049daosvg55i4.apps.googleusercontent.com
  secret: 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 */