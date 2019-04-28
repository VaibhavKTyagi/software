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
  Input
} from "reactstrap";

const Register = data => (
  <Form>
    <Row className="ml-2 mr-2">
      <Col className="col-2">
        <Label>
          <p>Name</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          ref="fname"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>

      <Col>
        <Input
          className="form-control textborder"
          type="text"
          name="secondName"
          id="secondName"
          placeholder="Second Name"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
    </Row>
    <Row className="ml-2 mr-2">
      <Col className="col-2">
        <Label>
          <p>Email</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
          onChange={e => {
            console.log(e);
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
    </Row>
    <Row className="ml-2 mr-2">
      <Col className="col-2">
        <Label>
          <p>Password</p>
        </Label>
      </Col>
      <Col>
        <Row>
          <Input
            className="form-control textborder"
            type="password"
            name="password"
            id="loginpassword"
            placeholder="Enter Password"
            onChange={e => {
              let oldHome = data.state.reg;
              oldHome[e.target.name] = e.target.value;
              data.setState({
                reg: oldHome
              });
            }}
          />
        </Row>
        <Row className="mt-2">
          <Input
            className="form-control textborder"
            type="password"
            name="confpass"
            id="confpassword"
            placeholder="Re-Enter Password"
            onChange={e => {
              let oldHome = data.state.reg;
              oldHome[e.target.name] = e.target.value;
              data.setState({
                reg: oldHome
              });
            }}
          />
        </Row>
      </Col>
    </Row>
    <Row className="ml-2 mr-2 mt-2">
      <Col className="col-2">
        <Label>
          <p>Address</p>
        </Label>
      </Col>
      <Col className="col-2">
        <Input
          className="textAreaStyle"
          type="textarea"
          name="address"
          id="address"
          placeholder="Address"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
    </Row>
    <Row className="ml-2 mr-2 mt-4">
      <Col className="col-2">
        <Label>
          <p>Phone Number</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Phone Number"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>

      <Col className="col-2">
        <Label>
          <p>Alternate Number</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="number"
          name="altPhoneNumber"
          id="altPhoneNumber"
          placeholder="Alt-Phone Number"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
    </Row>
    <Row className="ml-2 mr-2 mt-3">
      <Col className="col-2">
        <Label>
          <p>Date of Birth</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="date"
          id="dateOfBirth"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome["dateOfBirth"] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
      <Col className="col-2">
        <Label>
          <p>Aadhar Number</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="number"
          name="aadharNumber"
          id="aadharNumber"
          placeholder="Aadhar Number"
          onChange={e => {
            let oldHome = data.state.reg;
            oldHome[e.target.name] = e.target.value;
            data.setState({
              reg: oldHome
            });
          }}
        />
      </Col>
    </Row>
  </Form>
);

export default Register;
