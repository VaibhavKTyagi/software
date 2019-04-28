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
  ButtonGroup
} from "reactstrap";

const optional = data => (
  <Container>
    <Row>
      <Col className="col-2">
        <Label>
          <p>BAR ID Number</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="number"
          name="barID"
          id="barID"
          placeholder="BarID Number"
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
    <Row>
      <Col className="col-2">
        <Label>
          <p>Price</p>
        </Label>
      </Col>
      <Col>
        <Input
          className="form-control textborder"
          type="number"
          name="price"
          id="price"
          placeholder="price"
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
    <Row>
      <Col className="col-2">
        <Label>
          <p>Field of work</p>
        </Label>
      </Col>
      <Col className="col-8">
        <ButtonGroup name="speciality">
          <Button
            name="speciality"
            onClick={e => {
              let temp = data.state.reg;
              temp[e.target.name] = "Civil";
              data.setState({
                reg: temp
              });
            }}>
            Civil
          </Button>
          <Button
            name="speciality"
            onClick={e => {
              let temp = data.state.reg;
              temp[e.target.name] = "Criminal";
              data.setState({
                reg: temp
              });
            }}>
            Criminal
          </Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);

export default optional;
