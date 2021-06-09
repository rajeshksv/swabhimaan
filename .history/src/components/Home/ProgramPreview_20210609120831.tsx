import { motion, useAnimation } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import {
  GiFoodTruck,
  IoSchoolSharp,
  GiHealthNormal,
  MdWork,
  GiReceiveMoney,
  GiFamilyHouse,
} from "react-icons/all";
import { useInViewport } from "react-in-viewport";

const programs = [
  {
    Icon: GiFamilyHouse,
    header: "Community Enabling",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
  {
    Icon: IoSchoolSharp,
    header: "Education",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
  {
    Icon: GiHealthNormal,
    header: "Health",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
  {
    Icon: MdWork,
    header: "Employment",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
  {
    Icon: GiReceiveMoney,
    header: "Micro Lending",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
  {
    Icon: GiFoodTruck,
    header: "Food",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique eaque quasi necessitatibus ipsam numquam aut. Vero eum harum accusamus ullam.",
  },
];

const ProgramPreview = () => {
  const controls = useAnimation();
  const targetRef = useRef();
  const { inViewport } = useInViewport(
    targetRef,
    { threshold: 0.5 },
    { disconnectOnLeave: false },
    {}
  );
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  console.log({ inViewport });
  useEffect(() => {
    console.log("hi");
    if (inViewport) {
      controls.start("visible");
      console.log({ controls });
    } else {
      controls.start("hidden");
    }
  }, [controls, inViewport]);

  return (
    <motion.div
      ref={targetRef}
      initial="visible"
      variants={variants}
      initial="hidden"
      transition={{ duration: 0.3 }}
      className="my-5"
    >
      <h4 className="text-center mb-5">Our Missions</h4>
      <Row>
        {programs.map((p, i) => (
          <Col key={i} sm={4} className="p-4">
            <ProgramCard Icon={p.Icon} header={p.header} content={p.content} />
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

const ProgramCard = ({ Icon, header, content }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <Row>
        <Col xs="auto">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ type: "spring" }}
          >
            <Icon size={50} style={{ color: "#57b22f" }} />
          </motion.div>
        </Col>
        <Col>
          <h4>{header}</h4>
          <div>{content}</div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default ProgramPreview;
