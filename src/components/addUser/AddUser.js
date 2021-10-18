import React, { useState } from "react";
import { Card, Container, Col, Row, Button, Table } from "react-bootstrap";
import "./addUser.css";

const AddUser = ({ user, getTempUser }) => {
  const [userList, setUserList] = useState([]);

  return (
    <Card>
      {/* Buttons Container */}
      <Container className={"buttons"}>
        <Row>
          <Col>
            <Button variant="warning" onClick={() => getTempUser()}>
              NEW USER
            </Button>
          </Col>
          <Col>
            <Button
              variant="warning"
              onClick={() => {
                userList[userList.length - 1] === user
                  ? alert("Please try to add another person")
                  : setUserList([...userList, user]);
              }}
            >
              ADD USER
            </Button>
          </Col>
        </Row>
      </Container>

      {/* TABLE */}
      {userList.length === 0 ? null : (
        <Table striped bordered hover className={"table"}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Age</th>
            </tr>
          </thead>

          {/* maps the user list that added with event */}
          <tbody className="overflow-hidden">
            {userList.map((el, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{el.name.first}</td>
                <td>{el.email}</td>
                <td>{el.cell}</td>
                <td>{el.dob.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Card>
  );
};

export default AddUser;
