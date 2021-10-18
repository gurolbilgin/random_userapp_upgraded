import React, { useState } from "react";
import { Card, Image } from "react-bootstrap";
import Icons from "../icons/Icons";
import "./RandomUser.css";
import AddUser from "../addUser/AddUser";

const RandomUser = ({ user, getTempUser }) => {
  const [featuredInfo, setFeaturedInfo] = useState({
    type: "name",
    firstParam: "",
    secondParam: "",
  });

  return (
    <Card className="text-center">
      <Card.Header className="header">
        <Image src={user?.picture?.large} roundedCircle />
      </Card.Header>

      <Card.Body>
        <Card.Text>
          {featuredInfo.firstParam === "" ? (
            <Card.Text>
              <div>Hello</div>
              <div>See details below</div>
            </Card.Text>
          ) : (
            `my ${featuredInfo.type} is`
          )}
        </Card.Text>
        <Card.Title>
          {featuredInfo.firstParam === ""
            ? ""
            : featuredInfo.firstParam + " " + featuredInfo.secondParam}
        </Card.Title>

        {/* Icons Container */}
        <Icons user={user} setFeaturedInfo={setFeaturedInfo} />
      </Card.Body>

      {/* get temp usr is a function it is for event triggering when with new user button */}
      <AddUser user={user} getTempUser={getTempUser} />
    </Card>
  );
};

export default RandomUser;
