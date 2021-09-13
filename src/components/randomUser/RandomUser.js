import React, { useState } from "react";
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
import Icons from "../icons/Icons";
import Buttons from "../button/Buttons";
import "./RandomUser.css";
import AddUser from "../addUser/AddUser";

const RandomUser = ({ user, getProfileData }) => {
  console.log("randomUser Comp:", user);

  const [featuredInfo, setFeaturedInfo] = useState("");
  const [title, setTitle] = useState("");

  // console.log("random user component updates");
  console.log("featuredInfo", featuredInfo);

  return (
    <Card className="text-center">
      <Card.Header>
        <Image src={user?.picture?.large} roundedCircle />
      </Card.Header>

      <Card.Body>
        <Card.Text>{`my ${featuredInfo.type} is`}</Card.Text>
        <Card.Title>
          {/* {user?.name.first + " " + user?.name.last ||
            featuredInfo.name + " " + featuredInfo.lastName} */}
          {featuredInfo.firstParam + " " + featuredInfo.secondParam}
        </Card.Title>

        {/* Icons Container */}
        <Icons
          user={user}
          setFeaturedInfo={setFeaturedInfo}
          setTitle={setTitle}
        />

        {/* Buttons Container */}
        <Buttons user={user} featuredInfo={featuredInfo} />
      </Card.Body>

      <AddUser user={user} featuredInfo={featuredInfo} />
    </Card>
  );
};

export default RandomUser;
