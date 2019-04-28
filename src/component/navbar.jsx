import React, { Component } from "react";
//import { Button } from "reactstrap";
import "./Regester.css";

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

const nav = () => (
  <Navbar color="light" light expand="md">
    <NavbarBrand>BookMyLawyer</NavbarBrand>
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="/home">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/AddCase">Add Case</NavLink>
      </NavItem>
    </Nav>
    <Nav className="ml-auto" navbar>
      <NavItem className="ml-auto">
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Settings
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="/AccountSettings">
              Account Settings
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/ChangePass">Change Password</DropdownItem>
            <DropdownItem divider />
            <DropdownItem
              href="/"
              onClick={() => {
                sessionStorage.removeItem("token");
                sessionStorage.setItem("auth", false);
              }}>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </NavItem>
    </Nav>
  </Navbar>
);

export default nav;
