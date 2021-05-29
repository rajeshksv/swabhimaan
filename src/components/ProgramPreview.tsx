import React from "react";
import { Row, Col } from "react-bootstrap";
import {
  GiFoodTruck,
  IoSchoolSharp,
  GiHealthNormal,
  MdWork,
  GiReceiveMoney,
} from "react-icons/all";

const programs = [
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
  return (
    <div className="my-5">
      <h4 className="text-center mb-5">Our Missions</h4>
      <Row>
        {programs.map((p, i) => (
          <Col key={i} sm={4} className="p-4">
            <ProgramCard Icon={p.Icon} header={p.header} content={p.content} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const ProgramCard = ({ Icon, header, content }) => {
  return (
    <Row>
      <Col xs="auto">
        <Icon size={50} style={{ color: "#57b22f" }} />
      </Col>
      <Col>
        <h4>{header}</h4>
        <div>{content}</div>
      </Col>
    </Row>
  );
};

export default ProgramPreview;
