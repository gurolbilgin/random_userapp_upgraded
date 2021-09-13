import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Email from "../svg/Email";
import Phone from "../svg/Phone";
import Man from "../svg/Man";
import Woman from "../svg/Woman";
import GrowingUpMan from "../svg/GrowingUpMan";
import GrowingUpWomen from "../svg/GrowingUpWomen";
import Location from "../svg/Location";
import Padlock from "../svg/Padlock";

const Icons = ({ user, setFeaturedInfo, setTitle, featuredInfo }) => {
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
        console.log("inside", featuredInfo);
    }
  };

  const handleTitle = (title) => {
    setTitle(title);
  };

  return (
    <Card>
      <Container>
        <Row>
          <Col>
            <Man
              className="icons"
              onMouseEnter={() => {
                // setTitle();
                handleFeatuedInfo("name");
              }}
            />
            {/* <Woman className="icons" /> */}
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
            <GrowingUpMan
              className="icons"
              onMouseEnter={() => {
                handleFeatuedInfo("age");
              }}
            />
            {/* <GrowingUpWomen className="icons" /> */}
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
