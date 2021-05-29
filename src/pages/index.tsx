import * as React from "react";
import { Carousel, Container, Button } from "react-bootstrap";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import ProgramPreview from "../components/Home/ProgramPreview";
import Testimonials from "../components/Home/Testimonials";
import { StaticImage } from "gatsby-plugin-image";

import "../styles/index.scss";
import Metrics from "../components/Home/Metrics";
import Team from "../components/Home/Team";
import Gallery from "../components/Home/Gallery";

// const photos = [
//   {
//     src: "../images/collate1.webp",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "../images/collate2.webp",
//     width: 1,
//     height: 1,
//   },
//   {
//     src: "../images/collate3.webp",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "../images/collate4.webp",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "../images/collate5.webp",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "../images/collate6.webp",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "../images/collate7.webp",
//     width: 3,
//     height: 4,
//   },
//   {
//     src: "../images/collate8.webp",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "../images/collate9.webp",
//     width: 4,
//     height: 3,
//   },
// ];

// const imageRenderer = ({
//   index,
//   photo,
// }: {
//   index: number;
//   photo: {
//     width: number;
//     height: number;
//     src: string;
//   };
// }) => {
//   console.log({ photo }, photo.src);
//   return (
//     <StaticImage
//       key={photo.src}
//       width={photo.width}
//       height={photo.height}
//       src={photo.src}
//       alt="collate1"
//     />
//   );
// };

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
        <Team />
        <h3 className="my-5 text-center">Gallery</h3>
        <Gallery />
        <Footer />
      </div>
    </div>
  );
};

export default IndexPage;
