import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CauseCard from "../components/Common/CauseCard";
import Header from "../components/Common/Header";
import Impact from "../components/Common/Impact";

import HighlightsTemplate from "../components/Common/HighlightsTemplate";
import {
  GiOpenBook,
  MdTimeline,
  GiClothes,
  FaRegHandPaper,
} from "react-icons/all";
import "../styles/index.scss";

const highlights = [
  "Running since 7-8 years. 200+ women got benefited",
  "Gets cloth from TN and stitch and sell to super markets",
  "25 women stitch cloths",
  "8 Physicallly challenged youth",
];

const metrics = [
  { 
    text: "Benefited Women", 
    value: 200, 
    Icon: GiOpenBook, 
    color: "#f06626" 
  },
  {
    text: "Running since years",
    value: 8,
    Icon: MdTimeline,
    color: "#bf271a",
  },
  {
    text: "Clothes stictched",
    value: 10000,
    Icon: GiClothes,
    color: "#ffc925",
  },
  {
    text: "Educated Children",
    value: 32123,
    Icon: FaRegHandPaper,
    color: "#57b22f",
  },
];

const Employment = () => {
  return (
    <div>
      <Header />
      <StaticImage
        height={600}
        src="../images/employment.webp"
        className="d-block w-100 "
        alt="First slide"
      />
      <Impact metrics={metrics} />
      <HighlightsTemplate content={highlights} />;
      <Container>
        <h2>Coverage</h2>
      </Container>
      <CauseCard header="Employment">
        <Row>
          <Col>
            <StaticImage
              className="float-left mr-5"
              alt="school"
              src="../../images/school1.webp"
            ></StaticImage>
            <div>
              <div>
              We have been successfully running two cloth and paper bag producing units in the community which produce thousands of bags every day for the shopkeepers around the locality.
              </div>
              <div className="mb-4">
              We have also setup two low cost schools in the area which employ women from the same locality as teachers and supporting staff. Even the support staff at our clinics are hired from the same locality.
              </div>

              <div className="mb-4">
              We provide interest free small loans to the women in the locality to help them setup their own businesses, like tailoring, grocery shops, etc.
              </div>

              <div className="mb-4">
              That said, we are continuously in need of funds and avenues to extend our help to more of our community members.
              </div>
            </div>
          </Col>
        </Row>
      </CauseCard>
    </div>
  );
};

export default Employment;
