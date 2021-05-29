import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  GiOpenBook,
  AiOutlineSmile,
  AiOutlineHeart,
  FaRegHandPaper,
} from "react-icons/all";

const metrics = [
  { text: "Donations Made", value: 1234, Icon: GiOpenBook, color: "#f06626" },
  {
    text: "Happy Children",
    value: 54125,
    Icon: AiOutlineSmile,
    color: "#bf271a",
  },
  {
    text: "Volunteering Helpers",
    value: 2343,
    Icon: AiOutlineHeart,
    color: "#ffc925",
  },
  {
    text: "Educated Children",
    value: 32123,
    Icon: FaRegHandPaper,
    color: "#57b22f",
  },
];

const Metrics = () => {
  return (
    <div className="fact-counter">
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

export default Metrics;
