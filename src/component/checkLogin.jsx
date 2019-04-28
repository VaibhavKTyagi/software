import React, { Component } from "react";
import { Route, Redirect } from "react-router";

const checkLogin = data => <Redirect to="home" />;

export default checkLogin;
