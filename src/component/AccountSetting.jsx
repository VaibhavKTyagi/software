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
class AccountSetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cSelected: []
    };
    this.data = {};
    axios.defaults.headers.common["token"] = sessionStorage.getItem("token");
    this.onRadioBtnClick1 = this.onRadioBtnClick1.bind(this);
    this.update = this.update.bind(this);

    this.onRadioBtnClick2 = this.onRadioBtnClick2.bind(this);
    this.getData(this.setLawyers);
  }
  update() {
    if (this.data.barID) {
      axios.post("/api/accountSettings/updateLawyer", this.data);
    } else {
      axios.post("/api/accountSettings/updateUser", this.data);
    }
  }
  onRadioBtnClick1(rSelected) {
    this.data.available = rSelected;
    this.forceUpdate();
  }
  onRadioBtnClick2(rSelected) {
    this.data.speciality = rSelected;
    this.forceUpdate();
  }
  setLawyers = dataCome => {
    this.data = dataCome[0];
    console.log(this.data);

    this.forceUpdate();
  };
  getData = setLawyers => {
    //axios.defaults.headers.post["token"] = "test";
    // axios.defaults.headers.common = { token: "afd" };

    axios
      .post("/api/accountSettings/getSettings", "ets")
      .then(function(response) {
        //console.log(response.data);

        setLawyers(response.data);
      })
      .catch(function(response) {});
  };
  render() {
    return (
      <div>
        {nav()}
        <Container className="mt-5">
          <Card className="customcard">
            <CardHeader>
              <Row className="mt-2">
                <Col className="col-4">Account Settings</Col>

                <Col>{this.data.firstName}</Col>
                <Col>{this.data.email}</Col>
              </Row>
            </CardHeader>
            <CardBody className="customcardbody">
              {this.data.barID ? (
                <Row className="mt-2">
                  <Col className="col-4">
                    <Label>Availability</Label>
                  </Col>
                  <Col>
                    <ButtonGroup>
                      <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick1(true)}
                        active={this.data.available}>
                        Yes
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick1(false)}
                        active={!this.data.available}>
                        No
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              ) : (
                <Label />
              )}
              <Row className="mt-2">
                <Col className="col-4">
                  <Label>Mobile Number</Label>
                </Col>
                <Col className="col-3">
                  <Input
                    className="form-control textborder"
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={e => {
                      let temp = this.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                      console.log(this.data);
                    }}
                    value={this.data.phoneNumber}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-4">
                  <Label>Alternative Mobile Number</Label>
                </Col>
                <Col className="mt-2 col-3">
                  <Input
                    className="form-control textborder"
                    type="number"
                    name="altPhoneNumber"
                    id="altPhoneNumber"
                    onChange={e => {
                      let temp = this.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                      console.log(this.data);
                    }}
                    value={this.data.altPhoneNumber}
                  />
                </Col>
              </Row>
              <Row className="mt-2">
                <Col className="col-4">
                  <Label>Address</Label>
                </Col>
                <Col>
                  <Input
                    className="form-control textborder"
                    type="textarea"
                    row="5"
                    name="address"
                    id="address"
                    onChange={e => {
                      let temp = this.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                      console.log(this.data);
                    }}
                    value={this.data.address}
                  />
                </Col>
              </Row>

              {this.data.barID ? (
                <Row className="mt-2">
                  <Col className="col-4">
                    <Label>Price</Label>
                  </Col>
                  <Col className="col-3">
                    <Input
                      className="form-control textborder"
                      type="number"
                      name="price"
                      id="price"
                      onChange={e => {
                        let temp = this.data;
                        temp[e.target.name] = e.target.value;
                        this.setState({
                          data: temp
                        });
                        console.log(this.data);
                      }}
                      value={this.data.price}
                    />
                  </Col>
                </Row>
              ) : (
                <Label />
              )}
              {this.data.barID ? (
                <Row className="mt-2">
                  <Col className="col-4">
                    <Label>Speciality</Label>
                  </Col>
                  <Col>
                    <ButtonGroup>
                      <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick2("Civil")}
                        active={this.data.speciality === "Civil"}>
                        Civil
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => this.onRadioBtnClick2("Criminal")}
                        active={this.data.speciality === "Criminal"}>
                        Criminal
                      </Button>
                    </ButtonGroup>
                  </Col>
                </Row>
              ) : (
                <Label />
              )}
              <Button
                className=" float-right mt-3 btn-primary"
                onClick={this.update}>
                Update
              </Button>
            </CardBody>
          </Card>
        </Container>
      </div>
    );
  }
}

export default AccountSetting;
