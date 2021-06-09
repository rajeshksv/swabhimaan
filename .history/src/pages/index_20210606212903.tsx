import * as React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import ProgramPreview from "../components/Home/ProgramPreview";
import Testimonials from "../components/Home/Testimonials";
import "../styles/index.scss";
import Metrics from "../components/Home/Metrics";
import Team from "../components/Home/Team";
import Gallery from "../components/Home/Gallery";
import ImagesCarousel from "../components/Home/ImagesCarousel";

// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div>
        <ImagesCarousel />
        <Container>
          <ProgramPreview />
        </Container>
        <Metrics />

        <Container>
          <Testimonials />
        </Container>

        <Team />
        <h3 className="my-5 text-center">Gallery</h3>
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
