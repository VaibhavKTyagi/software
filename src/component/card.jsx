import React, { Component } from "react";
//import { Button } from "reactstrap";
import "./Regester.css";
import "./card.css";

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
  DropdownItem,
  UncontrolledCollapse,
  Table
} from "reactstrap";

const card = (value, dm, axios) => (
  <Card className="customcard">
    <CardHeader className="customcardheader">
      <Row>
        <Col>Case Name {value.caseName}</Col>
      </Row>
    </CardHeader>
    <CardTitle className="customtitle">
      <Row>
        <Col> Your Name</Col> <Col>{value.userID}</Col>
      </Row>
      <Row>
        <Col> Lawyer's Name</Col> <Col>{value.lawyerID}</Col>
      </Row>
    </CardTitle>

    <CardBody>
      <Row>
        <Col className="col-2">Description</Col>
        <Col>
          <Label>{value.caseDescription}</Label>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="col-2">Discussion</Col>
      </Row>
      <UncontrolledCollapse className="mt-3" toggler="#toggler">
        <Table>
          <tbody>
            <tr>
              <th>
                <Label className="mt-1">Lawyer</Label>
              </th>
              <th align="right">
                <Label className="float-right  mt-1">User</Label>
              </th>
            </tr>
            {value.convo.map(key => {
              return key.user ? (
                <tr>
                  <td />
                  <td align="right">
                    <Label className="float-right  mt-1">{key.user}</Label>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>
                    {" "}
                    <Label className="mt-1">{key.lawyer}</Label>
                  </td>
                  <td />
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Row>
          <Input
            className="form-control textborder col-11"
            type="textarea"
            name="reply"
            id={value.caseName}
            placeholder="Reply"
            row="3"
          />
          <Button
            className="sendBtn mt-2 float-right "
            onClick={e => {
              var id = sessionStorage.getItem("id");
              console.log(id, value);
              if (id === value.userID) {
                value.convo.push({
                  user: document.getElementById(value.caseName).value
                });
                axios.post("/api/caselist/addmsg/", value);
              } else if (id === value.lawyerID) {
                value.convo.push({
                  lawyer: document.getElementById(value.caseName).value
                });
                console.log(value);

                axios.post("/api/caselist/addmsg/", value);
              }
              document.getElementById(value.caseName).value = "";
              dm.forceUpdate();
            }}>
            🠺
          </Button>
        </Row>
      </UncontrolledCollapse>

      <Button className="float-right mt-3 btn-primary" id="toggler">
        Show All Messages
      </Button>
    </CardBody>
  </Card>
);
export default card;
