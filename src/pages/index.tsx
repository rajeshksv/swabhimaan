import * as React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProgramPreview from "../components/ProgramPreview";
import ImpactPreview from "../components/ImpactPreview";
import Testimonials from "../components/Testimonials";
import GalleryPhotos from "../components/Gallery";

import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.scss";
import Metrics from "../components/Metrics";
// markup
const IndexPage = () => {
  return (
    <div>
      <Header />
      <div>
        <Carousel>
          <Carousel.Item>
            <StaticImage
              src="../images/swamifood.webp"
              className="d-block w-100 darken-image"
              height={500}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button size="lg">Donate</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              height={500}
              src="../images/banner.webp"
              className="d-block w-100 darken-image"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button size="lg">Donate</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <StaticImage
              src="../images/banner_1.webp"
              height={500}
              className="d-block w-100 darken-image"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button size="lg">Donate</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <ProgramPreview />
          {/* <ImpactPreview /> */}
        </Container>
        <Metrics />
        <Container>
          <Testimonials />
        </Container>
        <br />
        {/* <GalleryPhotos /> */}
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
