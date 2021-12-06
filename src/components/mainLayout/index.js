import React from "react";
import { Container, Row, Col } from "reactstrap";

const MainLayout = ({
  childrenLeft,
  childrenRight,
}) => {
  return (
    <Container>
      <Row>
        <Col className="border"  xs="12">
          {childrenRight()}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;