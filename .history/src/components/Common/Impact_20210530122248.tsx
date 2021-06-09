import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  GiOpenBook,
  AiOutlineSmile,
  AiOutlineHeart,
  FaRegHandPaper,
} from "react-icons/all";

const ImpactFood = ({ metrics }) => {
  return (
    <div className="my-5">
      <Container>
        <Row>
          {metrics.map(({ text, value, Icon, color }) => (
            <Col xs={12} sm={6} md={3} key={text} className="text-center mb-5">
              <div
                className="d-flex justify-content-center"
                style={{ color: color }}
              >
                <Icon fontSize={50} className="mr-4" />
                <span style={{ fontSize: "2em" }}>{value}</span>
              </div>
              <div style={{ fontSize: "1.2em" }} className="mt-1">
                {text.toUpperCase()}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ImpactFood;
