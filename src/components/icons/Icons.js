import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Email from "../svg/Email";
import Phone from "../svg/Phone";
import Man from "../svg/Man";
import Woman from "../svg/Woman";
import GrowingUpMan from "../svg/GrowingUpMan";
import { ReactComponent as GrowingUpWomen } from "../../assets/growing-up-woman.svg";
import Location from "../svg/Location";
import Padlock from "../svg/Padlock";

// this function shows the related info when the certain icon is hovered it also changes the icon types acordingly to sex of the person
const Icons = ({ user, setFeaturedInfo }) => {
  const handleFeatuedInfo = (type) => {
    switch (type) {
      case "email address":
        return setFeaturedInfo({
          type,
          firstParam: user.email,
          secondParam: "",
        });

      case "name":
        return setFeaturedInfo({
          type,
          firstParam: user?.name.first,
          secondParam: user?.name.last,
        });

      case "age":
        return setFeaturedInfo({
          type,
          firstParam: user?.dob?.age,
          secondParam: "",
        });

      case "address":
        return setFeaturedInfo({
          type,
          firstParam: user?.location?.street?.number,
          secondParam: user?.location?.street?.name,
        });

      case "phone number":
        return setFeaturedInfo({
          type,
          firstParam: user.cell,
          secondParam: "",
        });

      case "username and password":
        return setFeaturedInfo({
          type,
          firstParam: user?.login.username,
          secondParam: user?.login.password,
        });

      default:
    }
  };

  return (
    <Card>
      <Container>
        <Row>
          <Col>
            {user?.gender === "male" ? (
              <Man
                className="icons"
                onMouseEnter={() => {
                  handleFeatuedInfo("name");
                }}
              />
            ) : (
              <Woman
                className="icons"
                onMouseEnter={() => {
                  handleFeatuedInfo("name");
                }}
              />
            )}
          </Col>
          <Col>
            <Email
              className="icons"
              onMouseEnter={() => {
                handleFeatuedInfo("email address");
              }}
            />
          </Col>
          <Col>
            {user?.gender === "male" ? (
              <GrowingUpMan
                className="icons women"
                onMouseEnter={() => {
                  handleFeatuedInfo("age");
                }}
              />
            ) : (
              <GrowingUpWomen
                className="icons"
                onMouseEnter={() => {
                  handleFeatuedInfo("age");
                }}
              />
            )}
          </Col>
          <Col>
            <Location
              className="icons"
              onMouseEnter={() => {
                handleFeatuedInfo("address");
              }}
            />
          </Col>
          <Col>
            <Phone
              className="icons"
              onMouseEnter={() => {
                handleFeatuedInfo("phone number");
              }}
            />
          </Col>
          <Col>
            <Padlock
              className="icons"
              onMouseEnter={() => {
                handleFeatuedInfo("username and password");
              }}
            />
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default Icons;
