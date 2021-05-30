import React from "react";
import Header from "../components/Common/Header";
import { StaticImage } from "gatsby-plugin-image";
import Highlights from "../components/Education/Highlights";
import SchoolsAndTuitions from "../components/Education/SchoolsAndTuitions";
import { Container } from "react-bootstrap";
import ImpactEducation from "../components/Education/ImpactEducation";
import "../styles/index.scss";

const Education = () => {
  return (
    <div>
      <Header />
      <StaticImage
        height={600}
        src="../images/school_kids.webp"
        className="d-block w-100 "
        alt="First slide"
      />
      <ImpactEducation />
      <Highlights />
      <Container>
        <h2>Coverage</h2>
      </Container>
      <SchoolsAndTuitions />
    </div>
  );
};

export default Education;
