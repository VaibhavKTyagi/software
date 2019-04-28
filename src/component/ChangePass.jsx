import React, { Component } from "react";
//import { Button } from "reactstrap";
import "./Regester.css";
import card from "./card";
import nav from "./navbar";
import axios from "axios";

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
  Dropdown,
  FormGroup,
  Label,
  Input,
  Collapse,
  Table,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse,
  ButtonGroup
} from "reactstrap";
import checkLogin from "./checkLogin";
class ChangePass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newpass: "",
      newpassChange: "",
      cSelected: [],
      match: false,
      success: false
    };
    this.check = this.check.bind(this);
    this.update = this.update.bind(this);
    axios.defaults.headers.common["token"] = sessionStorage.getItem("token");
    this.id = sessionStorage.getItem("id");
  }
  update() {
    axios.post("api/accountSettings/updatepasswd", this.state);
    this.state.success = true;
    this.forceUpdate();
  }
  check(e) {
    if (e.target.value.toString() === this.state.newpass.toString()) {
      console.log("match");
      this.state.match = true;
    } else {
      console.log("mismatch");
      this.state.match = false;
    }
  }

  render() {
    return (
      <div>
        {nav()}
        <Container className="mt-5">
          <Card className="customcard">
            <CardHeader>
              <Row className="mt-2">
                <Col className="col-4">
                  {!this.state.success
                    ? "Change Password"
                    : "Password Change Successful "}
                </Col>

                <Col />
                <Col>{this.id}</Col>
              </Row>
            </CardHeader>
            <CardBody className="customcardbody">
              <Row className="mt-2">
                <Col className="col-4">
                  <Label>Enter New Password</Label>
                </Col>
                <Col className="col-3">
                  <Input
                    className="form-control textborder"
                    type="password"
                    name="newpass"
                    id="newpass"
                    onChange={e => {
                      document.getElementById("confpass").value = "";
                      this.state.match = false;
                      this.newpassChange = "";
                      this.state.newpass = e.target.value.toString();
                    }}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="col-4">
                  <Label>Confirm New Password</Label>
                </Col>
                <Col className="col-3">
                  <Input
                    className="form-control textborder"
                    type="password"
                    name="confpass"
                    id="confpass"
                    onChange={e => {
                      console.log(this.state.newpass);

                      if (this.state.newpass === e.target.value.toString()) {
                        this.state.match = true;
                      } else {
                        this.state.match = false;
                      }

                      this.forceUpdate();
                    }}
                  />
                </Col>
              </Row>
              <Button
                className=" float-right mt-3 btn-primary"
                disabled={!this.state.match}
                onClick={this.update}>
                Update and save
              </Button>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default ChangePass;
