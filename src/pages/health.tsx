import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CauseCard from "../components/Common/CauseCard";
import Header from "../components/Common/Header";
import Impact from "../components/Common/Impact";

import HighlightsTemplate from "../components/Common/HighlightsTemplate";
import {
  FaClinicMedical,
  MdTimeline,
  GiReceiveMoney,
  GiEyelashes,
} from "react-icons/all";
import "../styles/index.scss";

const highlights = [
  "Started in 2004",
  "Started 3 clinics in the community - Cold, Cough, Fever",
  "They serve over 100 patients per day. Ppl outisde community also come",
  "In partership with Acura Hospirtal - Surgery, Fracture",
  "2 Doctors are serving over 15 years",
  "Medicines are very cheap and 50% subdised ",
  "In partnership with Gracious eye clinic for subsidized cataract surgeres. Reduced price by 80%",
  "In partnership with Apollo pharmacy to get 20% discounts",
];

const metrics = [
  { 
    text: "Daily Patients", 
    value: 100, 
    Icon: FaClinicMedical, 
    color: "#f06626" 
  },
  {
    text: "Running since years",
    value: 15,
    Icon: MdTimeline,
    color: "#bf271a",
  },
  {
    text: "Donations Made",
    value: 1000000,
    Icon: GiReceiveMoney,
    color: "#ffc925",
  },
  {
    text: "Cataract Surgeries Done",
    value: 32123,
    Icon: GiEyelashes,
    color: "#57b22f",
  },
];

const Health = () => {
  return (
    <div>
      <Header />
      <StaticImage
        height={600}
        src="../images/health.webp"
        className="d-block w-100 "
        alt="First slide"
      />
      <Impact metrics={metrics} />
      <HighlightsTemplate content={highlights} />;
      <Container>
        <h2>Coverage</h2>
      </Container>
      <CauseCard header="Clinics">
        <Row>
          <Col>
            <StaticImage
              className="float-left mr-5"
              alt="school"
              src="../../images/school1.webp"
            ></StaticImage>
            <div>
              <div>
              Most working folks in the slums are daily wage earners. A day out of work due t illness can lead to serious disruptions in livelihood as most live hand-to-mouth. This situation is sadly all too apparent to most healthcare providers in the area who charge steep consulting fees because they know that people don’t have many options. There is also a unholy nexus between area doctors and medical representatives from drug companies with payments tied to the number of prescriptions.
              The folks in the slums are also exposed to very high health hazards due to poor public hygiene and sanitation. Uncleared garbage can lie around for months and open sewers are everywhere.
              </div>
              <div className="mb-4">
              Two Swabhimaan clinics have been operating since 2003 to help the people of the slums gain access to basic healthcare. The primary clinic is open to all and consulting and most drugs are free. The clinic is staffed by a primary health physician on all days except Fridays and Sundays between 11 AM and 2 PM.
              </div>

              <div className="mb-4">
              The second clinic has a women’s and antenatal specialist and operates in the evenings for women patient’s only. This work is crucial since a lot of new mothers in the area are under-nourished teenagers. Lack of proper professional care can lead to inter generational ill health and poverty.
              </div>
            </div>
          </Col>
        </Row>
      </CauseCard>
    </div>
  );
};

export default Health;
