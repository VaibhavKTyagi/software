import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";
import Piechart from "./piechart";
import Linechart from "./linechart";
const dashboardcard = props => {
  return (
    <Row>
      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>Criminal Cases</CardTitle>
          <CardText>Total Number of criminal cases: 27</CardText>
        </Card>
      </Col>
      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>Civil Cases</CardTitle>
          <CardText>Total Number of civil cases: 27</CardText>
        </Card>
      </Col>

      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>Lawyer</CardTitle>
          <Piechart />
        </Card>
      </Col>
      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>Cases</CardTitle>
          <Linechart />
        </Card>
      </Col>
      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>List of Criminal Lawyers</CardTitle>
          <CardText>
            <ol>
              <li>Vivek Deo</li>
              <li>Ashank Sharma</li>
            </ol>
          </CardText>
        </Card>
      </Col>
      <Col className="mt-3 ml-5" sm="5">
        <Card body>
          <CardTitle>List of Civil Lawyers</CardTitle>
          <CardText>
            <ol>
              <li>Vivek Deo</li>
              <li>Ashank Sharma</li>
            </ol>
          </CardText>
        </Card>
      </Col>
    </Row>
  );
};

export default dashboardcard;
