import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CauseCard from "../components/Common/CauseCard";
import Header from "../components/Common/Header";
import Impact from "../components/Common/Impact";

import HighlightsTemplate from "../components/Common/HighlightsTemplate";
import {
  GiOpenBook,
  AiOutlineSmile,
  AiOutlineHeart,
  FaRegHandPaper,
} from "react-icons/all";
import "../styles/index.scss";

const highlights = [
  "Started in 2002",
  "Adopted 4 schools in the community covering over 250 students per year",
  "Running since 20 years, many have graduated and now becoming role models,leaders for younger generation",
  "Teacher training via TFI 20 teachers teach per year.",
  "Providing breakfast and lunch for 60 students Tution training for 8th, 9th, 10th class students",
];

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

const CommunityEnabling = () => {
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
      <CauseCard header="Community">
        <Row>
          <Col>
            <StaticImage
              className="float-left mr-5"
              alt="school"
              src="../../images/school.webp"
            ></StaticImage>
            <div>
              <div>
              Every social movement's success depends highly upon active participation from the members of the society. We help philanthropists within the community to do more for their neighbours by providing them the right guidance and resources.

              </div>
              <div className="mb-4">
              We have some very inspiring members in the Rajendranagara community who have been who have been working relentlessly to support our cause and help their neighbourhood.

              </div>

              <div className="mb-4">
              Suleiman is an unstoppable force, who is ready at even ungodly hours to go out and take delivery of excess food, clothes, and plastic materials from any corner of the city. He has been canvassing throughout Bengaluru to educate people on proper usage of their excess stocks and getting us more to work with.

              </div>

              <div className="mb-4">
              Ganesh, a disabled himself has been irreplaceable in our efforts to generate more and more employment opportunities for the women and disabled of our community. Today he manages our manufacturing centre for cloth and paper bags which produces 1000s of bags every day. He also doubles up as our marketing chief and works with the stores in surrounding areas to sell these bags.
              </div>

              <div className="mb-4">
              We also have philanthropists inspired by Venkat who regularly participate in various fund raising and donations campaigns. The good people atIntuithave been sharing there excess food with us every day, for the last one year. They have enabled us to provide free daily meals to 400 families, every day of the last one and a half year.
              </div>

              <div className="mb-4">
              We need more of such people to help us extend our services to more families and communities.
              </div>
            </div>
          </Col>
        </Row>
      </CauseCard>
    </div>
  );
};

export default CommunityEnabling;
