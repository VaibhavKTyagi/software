import React, { Component } from "react";
//import { Button } from "reactstrap";
import "./Regester.css";
import card from "./card";
import nav from "./navbar";
import nav1 from "./dashboardnavbar";
import dashboardcard from "./dashboardcard";

import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class dashboard extends Component {
 
  render() {
    return (
      <div>
        {nav1()}
        {dashboardcard()}
      </div>
    );
  }
}

export default dashboard;
