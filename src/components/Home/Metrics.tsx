import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  GiFamilyHouse,
  GiOpenedFoodCan,
  FaUserGraduate,
  MdTimeline,
} from "react-icons/all";

const metrics = [
  { 
    text: "Community members",
    value: 100000,
    Icon: GiFamilyHouse,
    color: "#f06626"
  },
  {
    text: "Meals distributed",
    value: 50000,
    Icon: GiOpenedFoodCan,
    color: "#ffc925",
  },
  {
    text: "Educated Children",
    value: 32123,
    Icon: FaUserGraduate,
    color: "#57b22f",
  },
  {
    text: "Years Running since",
    value: 20,
    Icon: MdTimeline,
    color: "#bf271a",
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
