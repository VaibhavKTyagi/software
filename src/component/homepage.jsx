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
class home extends Component {
  state = {};
  dummy = {
    user: "Vivek",
    advocate: "kljsdf",
    caseID: "1238908901283",
    caseName: "hhoahjsdfkojl",
    caseDesc:
      "ajsdflkjasdklasdasdasdasdasdasddddddddddddddddddddddddddddddddddddddddddf lkasjdlkasjdllkajsd kljsdafkllkj",
    convo: [
      { user: "asdfsdf" },
      { lawyer: "asd" },
      { lawyer: "asdfsdf" },
      { lawyer: "asdfsdf" },
      { user: "asdfsdf" },
      { lawyer: "asdfsdf" },
      { user: "asdfsdf" }
    ]
  };

  constructor(props) {
    axios.defaults.headers.common["token"] = sessionStorage.getItem("token");
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.getList(this.setLawyers);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  setLawyers = dataCome => {
    this.setState(prevState => ({
      data: dataCome
    }));

    this.forceUpdate();
  };
  getList = setLawyers => {
    //axios.defaults.headers.post["token"] = "test";
    // axios.defaults.headers.common = { token: "afd" };

    axios
      .post("/api/caselist/getlist")
      .then(function(response) {
        setLawyers(response.data);
      })
      .catch(function(response) {});
  };
  render() {
    return (
      <div>
        {nav()}

        {this.state.data ? (
          this.state.data.map(key => {
            return (
              <Container className="mt-5">{card(key, this, axios)}</Container>
            );
          })
        ) : (
          <Container className="mt-5">
            {card(this.dummy, this, axios)}
          </Container>
        )}
      </div>
    );
  }
}

export default home;
