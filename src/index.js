import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
//import "react-strap/dist/css/react.css";

import Home from "./component/homepage";
import Login from "./component/LoginComp";
import AddCase from "./component/AddCase";
import AccountSettings from "./component/AccountSetting";
import ChangePass from "./component/ChangePass";
import dashBoard from "./component/dashboard";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/AddCase" component={AddCase} />
      <Route exact path="/AccountSettings" component={AccountSettings} />
      <Route exact path="/ChangePass" component={ChangePass} />
      <Route exact path="/dash" component={dashBoard} />
    </div>
  </Router>,
  document.getElementById("root")
);

ReactDOM.render(<Home />, document.getElementById("root/home"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
