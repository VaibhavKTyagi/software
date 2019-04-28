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
  UncontrolledCollapse
} from "reactstrap";
class AddCase extends Component {
  constructor(props) {
    super(props);
    axios.defaults.headers.common["token"] = sessionStorage.getItem("token");
    this.toggle = this.toggle.bind(this);
    this.droptoggle = this.droptoggle.bind(this);
    this.state = { collapse: true };
    this.state = { dropdownOpen: true };
    this.state = { data: { speciality: "Criminal" } };
    this.state.collapse = true;
  }
  selected = () => {
    axios.post("/api/caselist/addCase", this.state.data);

    console.log(this.state.data);
  };

  setLawyers = datal => {
    console.log("data1", datal);
    this.lawyers = datal;
    this.setState(prevState => ({
      lawyers: datal
    }));
  };
  getLawyerList = setLawyers => {
    axios
      .post("/api/lawyer/getlist", this.state.data)
      .then(function(response) {
        console.log("resp", response.data);
        setLawyers(response.data);
        return response.data;
      })
      .catch(function(response) {});
  };
  toggle() {
    console.log(this.state);
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }));
    this.getLawyerList(this.setLawyers);
  }

  droptoggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        {nav()}

        <Container className="mt-5">
          <Card className="customcard">
            <CardHeader>
              <Row>
                <Col>Case Details</Col>
              </Row>
            </CardHeader>
          </Card>
          <Collapse isOpen={this.state.collapse}>
            <CardBody className="customcardbody">
              <Row>
                <Col className="col-2">
                  <Label>Provid a case name</Label>
                </Col>
                <Col className="col-10">
                  <Input
                    className="form-control textborder"
                    type="text"
                    name="caseName"
                    id="caseName"
                    placeholder="Case Name"
                    ref="fname"
                    onChange={e => {
                      let temp = this.state.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-2">
                  <Label>Case Description</Label>
                </Col>
                <Col className="col-10">
                  <Input
                    className="form-control textborder"
                    type="textarea"
                    name="caseDescription"
                    id="caseDesc"
                    rows="30"
                    placeholder=""
                    onChange={e => {
                      let temp = this.state.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col className="col-2">
                  <Label>Case Type</Label>
                </Col>
                <Col className="col-10">
                  <Dropdown
                    isOpen={this.state.dropdownOpen}
                    toggle={this.droptoggle}>
                    <DropdownToggle caret className="form-control textborder">
                      {this.state.data.speciality}
                    </DropdownToggle>
                    <DropdownMenu className="form-control textborder">
                      <DropdownItem header>Lawyer Type</DropdownItem>
                      <DropdownItem
                        name="speciality"
                        value="Civil"
                        onClick={e => {
                          let temp = this.state.data;
                          temp[e.target.name] = e.target.value;
                          this.setState({
                            data: temp
                          });
                        }}>
                        Civil Lawyer
                      </DropdownItem>
                      <DropdownItem
                        name="speciality"
                        value="Criminal"
                        onClick={e => {
                          let temp = this.state.data;
                          temp[e.target.name] = e.target.value;
                          this.setState({
                            data: temp
                          });
                        }}>
                        Criminal Lawyer
                      </DropdownItem>
                      <DropdownItem divider />
                    </DropdownMenu>
                  </Dropdown>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col className="col-2">
                  <Label>Price Lower limit</Label>
                </Col>
                <Col className="col-3">
                  <Input
                    className="form-control textborder"
                    type="number"
                    name="lowerlimit"
                    id="lowerlimit"
                    placeholder="Lower Limit"
                    onChange={e => {
                      let temp = this.state.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                    }}
                  />
                </Col>
                <Col className="col-2">
                  <Label>Price Lower Upper</Label>
                </Col>
                <Col className="col--3">
                  <Input
                    className="form-control textborder"
                    type="number"
                    name="upperlimit"
                    id="upperlimit"
                    placeholder="Upper Limit"
                    onChange={e => {
                      let temp = this.state.data;
                      temp[e.target.name] = e.target.value;
                      this.setState({
                        data: temp
                      });
                    }}
                  />
                </Col>
              </Row>
            </CardBody>
          </Collapse>
          <Button
            className="float-right mt-3 btn-primary"
            onClick={this.toggle}>
            {this.state.collapse ? "Add Case" : "Edit Case"}
          </Button>

          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Speciality</th>
                <th>Price</th>
                <th>Select</th>
              </tr>
              {this.lawyers
                ? this.lawyers.map(key => {
                    return (
                      <tr>
                        <th />
                        <th>{key.firstName}</th>
                        <th>{key.secondName}</th>
                        <th>{key.speciality}</th>
                        <th>{key.price}</th>
                        <th>
                          <Button
                            name="lawyerID"
                            value={key.email}
                            onClick={e => {
                              let temp = this.state.data;
                              temp[e.target.name] = e.target.value;
                              this.setState({
                                data: temp
                              });
                              this.selected();
                            }}>
                            Select
                          </Button>
                        </th>
                      </tr>
                    );
                  })
                : null}
            </thead>
          </Table>
        </Container>
      </div>
    );
  }
}

export default AddCase;
