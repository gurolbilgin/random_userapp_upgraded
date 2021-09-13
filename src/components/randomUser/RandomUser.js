import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import Icons from "../icons/Icons";
import Buttons from "../button/Buttons";
import "./RandomUser.css";
import AddUser from "../addUser/AddUser";

const RandomUser = ({ user, getProfileData }) => {
  console.log("randomUser Comp:", user);

  const [featuredInfo, setFeaturedInfo] = useState({
    type: "name",
    firstParam: user?.name.first,
    secondParam: user?.name.last,
  });
  const [title, setTitle] = useState("");

  // console.log("random user component updates");
  console.log("featuredInfo", featuredInfo);

  return (
    <Card className="text-center">
      <Card.Header className="header">
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
