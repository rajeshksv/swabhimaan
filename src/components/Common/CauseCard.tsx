import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const CauseCard = ({ header, children }) => {
  return (
    <>
      <Container className="mb-5">
        <h3 className="py-5">{header}</h3>
        <Card>
          <Card.Body>{children}</Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default CauseCard;
