import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Buttons = () => {
  return (
    <Card>
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
    </Card>
  );
};

export default Buttons;
