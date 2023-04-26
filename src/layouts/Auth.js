import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components


// views

import Login from "views/auth/Login.js";

export default function Auth() {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-offwhite bg-division bg-no-repeat bg-full"

          ></div>
          <Login />
        </section>
      </main>
    </>
  );
}
