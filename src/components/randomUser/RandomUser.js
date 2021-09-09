import React from "react";
import {
  Card,
  ListGroup,
  Button,
  Col,
  Image,
  Row,
  Container,
  ButtonGroup,
} from "react-bootstrap";
import "./RandomUser.css";
import Email from "../svg/Email";
import Phone from "../svg/Phone";
import Man from "../svg/Man";
import Woman from "../svg/Woman";
import GrowingUpMan from "../svg/GrowingUpMan";
import GrowingUpWomen from "../svg/GrowingUpWomen";
import Location from "../svg/Location";
import Padlock from "../svg/Padlock";

const RandomUser = ({ user, getProfileData }) => {
  console.log("randomUser Comp:", user);
  return (
    <Card className="text-center">
      <Card.Header>
        <Image src={user?.picture?.large} roundedCircle />
      </Card.Header>

      <Card.Body>
        <Card.Title>My {"<Dummy Text>"} is</Card.Title>
        <Card.Text>Dummy Info</Card.Text>

        {/* Icons Container */}
        <Container>
          <Row>
            <Col>
              <Man className="icons" />
              {/* <Woman className="icons" /> */}
            </Col>
            <Col>
              <Email className="icons" />
            </Col>
            <Col>
              <GrowingUpMan className="icons" />
              {/* <GrowingUpWomen className="icons" /> */}
            </Col>
            <Col>
              <Location className="icons" />
            </Col>
            <Col>
              <Phone className="icons" />
            </Col>
            <Col>
              <Padlock className="icons" />
            </Col>
          </Row>
        </Container>

        {/* Buttons Container */}
        <Container>
          <Row>
            <Col>
              <Button variant="warning">Go somewhere</Button>
            </Col>
            <Col>
              <Button variant="warning">Go somewhere</Button>
            </Col>
          </Row>
        </Container>
      </Card.Body>

      <Card.Footer className="text-muted">
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

export default RandomUser;
