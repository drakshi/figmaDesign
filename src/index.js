import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Auth from "layouts/Auth.js";

// views without layouts

import Index from "views/Index.js";
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(
  <GoogleOAuthProvider clientId="233494798175-lqup49mf9fonfkjtjca049daosvg55i4.apps.googleusercontent.com">

    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/" component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);
