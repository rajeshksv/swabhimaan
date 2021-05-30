import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CauseCard from "../components/Common/CauseCard";
import Header from "../components/Common/Header";
import Impact from "../components/Common/Impact";

import HighlightsTemplate from "../components/Common/HighlightsTemplate";
import {
  FaBookReader,
  SiGooglescholar,
  SiWorkplace,
  GiMoneyStack,
} from "react-icons/all";
import "../styles/index.scss";

const highlights = [
  "Started in 2002",
  "Adopted 4 schools in the community covering over 250 students per year",
  "Running since 20 years, many have graduated and now becoming role models,leaders for younger generation",
  "Teacher training via TFI. 20 teachers teach per year",
  "Providing breakfast and lunch for 60 students",
  "Tution training for 8th, 9th, 10th class students",
  "Scholarships for bright students via Entrance tests",
  "Running computer center for 4 years - Coding, Paint, Word. 12 Desktops. 2 Teachers",
  "Running Library in partnership with Cosynook. Twice a week 3 hours. Read story books, participate in speaking english. Since 3 years",
  "Youth empowerment. Soft skills - English, GK interview skills for 40-50 youth per year. ",
  "40 children per week go to neighboring playground in partnership with “Just for kicks",
  "Montessori education, Train nursery teachers. 3 years",
  "Imporve Eng Grammer with Cilrey NGO. 3rd - 4th classes. ",
  "Movies, Christmas gifts for school kids. Since 5-6 years",
];

const metrics = [
  { 
    text: "Students benefited", 
    value: 1234,
    Icon: FaBookReader,
    color: "#f06626" 
  },
  {
    text: "Scholarships",
    value: 2000,
    Icon: SiGooglescholar,
    color: "#bf271a",
  },
  {
    text: "Students who got jobs",
    value: 50,
    Icon: SiWorkplace,
    color: "#ffc925",
  },
  {
    text: "Expenditure per year",
    value: 1000000,
    Icon: GiMoneyStack,
    color: "#57b22f",
  },
];

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
      <Impact metrics={metrics} />
      <HighlightsTemplate content={highlights} />;
      <Container>
        <h2>Coverage</h2>
      </Container>
      <CauseCard header="Schools & Tuition">
        <Row>
          <Col>
            <StaticImage
              className="float-left mr-5"
              alt="school"
              src="../../images/school.webp"
            ></StaticImage>
            <div>
              <div>
                The central and state governments in India promise mandatory and
                free primary education to all children through public schools.
                However the physical and teacher quality at these schools in
                Bangalore are so poor that they act as little more than mid-day
                meal outlets for most kids. Teachers are underpaid,
                under-qualified and frequently absent.
              </div>
              <div className="mb-4">
                Several private schools have sprung up within the slums to fill
                this need. In spite of the many challenges they face, these
                schools are considered a better alternative by parents. However,
                most have trouble paying the average annual tuition fee of
                around Rs 8000. Most families have to choose between their kids’
                education and other pressing needs. Forced drop outs due to
                financial difficulties are all too common.
              </div>

              <div className="mb-4">
                Swabhimaan helps parents meet this challenge by extending
                financial aid to the best students. To best utilize our limited
                resources, we conduct diagnostic tests in english, science, math
                and civics just before the start of each school year. Close to
                1000 students turn up for these, of which the top 100 kids are
                are supported in the form of tuition reimbursement.
              </div>

              <div className="mb-4">
                Swabhimaan also employs a full time teacher at Sunshine
                school,pay for supplemental exam preparation classes.
              </div>

              <div className="mb-4">
                We also pay for teacher training workshops by the 3-2-1
                Foundation which help them in lesson planning and conducting
                engaging sessions.
              </div>
            </div>
          </Col>
        </Row>
      </CauseCard>
    </div>
  );
};

export default Education;
