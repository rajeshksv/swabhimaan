import React from "react";
// import { motion, useAnimation } from "framer-motion";
import { Row, Col, Container } from "react-bootstrap";
import {
  GiFamilyHouse,
  GiOpenedFoodCan,
  FaUserGraduate,
  MdTimeline,
  MdLocalHospital,
  RiTeamLine,
  MdLocalGroceryStore,
  FaRupeeSign,
} from "react-icons/all";
import { useInView } from "react-intersection-observer";
import Counter from "../Common/Counter";

const metrics = [
  {
    text: "Community members",
    value: 100000,
    Icon: GiFamilyHouse,
    color: "#f06626",
  },
  {
    text: "Meals distributed",
    value: 500000,
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
  {
    text: "Volunteers",
    value: 40,
    Icon: RiTeamLine,
    color: "#f06626",
  },
  {
    text: "Patients Treated",
    value: 20000,
    Icon: MdLocalHospital,
    color: "#ffc925",
  },
  {
    text: "Grocery Kits Given",
    value: 12345,
    Icon: MdLocalGroceryStore,
    color: "#57b22f",
  },
  {
    text: "Loans Given for 0% interestes",
    value: 1000000,
    Icon: FaRupeeSign,
    color: "#bf271a",
  },
];

const Metrics = () => {
  // const variants = {
  //   visible: { opacity: 1, scale: 1 },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  // const [controls, targetRef, inViewport] = useAnimateOnScroll({
  //   startLabel: "visible",
  // });
  const [ref, inView, entry] = useInView({ threshold: 0 });
  return (
    // <motion.div
    //   ref={targetRef}
    //   variants={variants}
    //   animate={controls}
    //   initial="hidden"
    //   transition={{ duration: 0.3 }}
    //   className="fact-counter"
    // >
    <div className="fact-counter" ref={ref}>
      <Container>
        <Row>
          {metrics.map(({ text, value, Icon, color }) => (
            <Col xs={12} sm={6} md={3} key={text} className="text-center mb-5">
              <div
                className="d-flex justify-content-center"
                style={{ color: color }}
              >
                <Icon fontSize={50} className="mr-4" />
                <span style={{ fontSize: "2em" }}>
                  <Counter from={0} to={value} startAnimation={inViewport} />
                </span>
              </div>
              <div style={{ fontSize: "1.2em" }} className="mt-1">
                {text.toUpperCase()}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
    // </motion.div>
  );
};

export default Metrics;
