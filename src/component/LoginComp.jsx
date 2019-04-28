import React, { Component } from "react";
import { Route, Redirect } from "react-router";
//import { Link } from "react-router-dom";
//import { Button } from "reactstrap";
import Register from "./Regester";
import checkLogin from "./checkLogin";
import axios from "axios";
import optional from "./optionalLawyerRegester";
import homepage from "./homepage";

import "./Login.css";

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
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    sessionStorage.setItem("auth", false);
    this.state = {
      admin: false,
      home: {},
      reg: {
        speciality: ""
      }
    };

    this.toggle = this.toggle.bind(this);
    this.admin = this.admin.bind(this);
  }
  admin = () => {
    if (
      this.state.home.email === "admin" &&
      this.state.home.password === "admin"
    ) {
      this.state.admin = true;
      this.forceUpdate();
    }
  };
  modelClose = () => {
    console.log(this.state);
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  toggle1 = () => {
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  };
  handleChange = e => {
    let oldHome = this.state.home;
    oldHome[e.target.name] = e.target.value;
    this.setState({
      home: oldHome
    });
    console.log(this.state);
  };

  clickOnSignIn = update => {
    console.log(this.state.home);
    //console.log(
    //  axios.get(
    //     "/lawyer?email=" +
    //       this.state.home.email +
    //       "&password=" +
    //       this.state.home.password
    //   )
    // );
    var temp = axios
      .post("/login", this.state.home)
      .then(function(response) {
        sessionStorage.setItem("auth", true);
        console.log("item", sessionStorage.getItem("auth"));

        sessionStorage.setItem("token", response.data.token);

        update.forceUpdate();
        //  this.login = true;
      })
      .catch(function(response) {
        console.log("incorrect");
        sessionStorage.setItem("auth", false);
        update.forceUpdate();
      });

    this.loginChange();
  };
  loginChange = () => {
    console.log("test", sessionStorage.getItem("auth"));
    this.setState(prevState => ({
      login: true
    }));
  };
  clickOnRegistrationLawyer = () => {
    console.log(this.state.reg);
    axios.post("/lawyer", this.state.reg);
    this.setState(prevState => ({
      modal1: !prevState.modal1
    }));
  };

  clickOnRegistrationUser = () => {
    console.log(this.state.reg);
    axios.post("/user", this.state.reg);
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    return (
      <Container className="col-3">
        {this.state.admin === true ? <Redirect push to="/dash" /> : null}
        <Card className="mx-auto my-4 middleCard">
          <CardHeader>
            <CardTitle className="text-center">
              <h2>Sign In</h2>
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Form>
              <Row className="ml-2 mr-2">
                <Input
                  className="form-control textborder"
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={this.state.loginid}
                />
              </Row>
              <Row className="ml-2 mr-2 mt-3">
                <Input
                  className="form-control textborder"
                  type="password"
                  name="password"
                  id="loginpassword"
                  placeholder="Enter Password"
                  onChange={this.handleChange}
                />
              </Row>

              <Row className="ml-2 mr-2 mt-3">
                <Button
                  onClick={() => {
                    sessionStorage.setItem(
                      "id",
                      document.getElementById("exampleEmail").value
                    );
                    this.clickOnSignIn(this);
                  }}
                  color="primary"
                  size="lg"
                  block>
                  Sign In
                </Button>
              </Row>

              <Row className="ml-2 mr-2 mt-4">
                <center>
                  <Label>
                    <h5>If you are new user click on Rigester</h5>
                  </Label>
                </center>
              </Row>
              <Row className="ml-2 mr-2 mt-1">
                <Col>
                  <Button color="success" onClick={this.toggle} size="lg" block>
                    User Register
                  </Button>
                  <Modal
                    ref="modal"
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                    className="modal-lg"
                    ref="model">
                    <ModalHeader toggle={this.toggle} color="secondary">
                      User Register
                    </ModalHeader>
                    <ModalBody>{Register(this)}</ModalBody>
                    <ModalFooter>
                      <Button
                        color="success"
                        onClick={this.clickOnRegistrationUser}>
                        Register
                      </Button>{" "}
                      <Button color="secondary" onClick={this.modelClose}>
                        Cancel
                      </Button>{" "}
                    </ModalFooter>
                  </Modal>
                </Col>

                <Col>
                  <Button
                    color="success"
                    onClick={this.toggle1}
                    size="lg"
                    block>
                    Register Lawyer
                  </Button>
                </Col>
              </Row>
              <Row className=" ml-2 mr-2 mt-1">
                <Col>
                  <Button color="primary" onClick={this.admin} size="lg" block>
                    Admin Login
                  </Button>
                </Col>
              </Row>
              <Modal
                isOpen={this.state.modal1}
                toggle={this.toggle1}
                className={this.props.className}
                className="modal-lg">
                <ModalHeader toggle={this.toggle1} color="secondary">
                  Lawyer Register
                </ModalHeader>
                <ModalBody>
                  {Register(this)}
                  {optional(this)}
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="success"
                    onClick={this.clickOnRegistrationLawyer}>
                    Register
                  </Button>{" "}
                  <Button color="secondary" onClick={this.modelClose}>
                    Cancel
                  </Button>{" "}
                </ModalFooter>
              </Modal>
            </Form>
          </CardBody>
        </Card>
        {this.state.login === true ? (
          sessionStorage.getItem("auth") === "true" ? (
            <Redirect to="/home" />
          ) : (
            <Row className="ml-2 mr-2 mt-4">
              <center>
                <Label>
                  <h5>Incorrect Password</h5>
                </Label>
              </center>
            </Row>
          )
        ) : null}
      </Container>
    );
  }
}

export default Login;
