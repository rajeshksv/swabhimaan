import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

const Testimonials = () => {
  return (
    <>
      <br />
      <h3 className="text-center my-5">Testimonials</h3>
      <Carousel>
        <Carousel.Item>
          <Row>
            <Col xs="auto">
              <StaticImage
                width={300}
                height={300}
                src="../images/abhishek.webp"
                className="d-block w-100 testimonial-img"
                alt="First slide"
              />
            </Col>
            <Col className="justify-content-center d-flex flex-column">
              <h3>Abhishek Athreya</h3>
              <p>
                I was inspired by how one small team of socially just people can
                create such a far-reaching impact on the community. The
                Swabhimaan model is something we all should learn from and
                incorporate into our own local communities!{" "}
              </p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs="auto">
              <StaticImage
                width={300}
                height={300}
                src="../images/pranathi.webp"
                className="d-block w-100 testimonial-img"
                alt="First slide"
              />
            </Col>
            <Col className="justify-content-center d-flex flex-column">
              <h3>Pranathi Vuppalur</h3>
              <p>
                Mr. Venkat has a never-ending zeal for helping. Even in the
                corona-affected times, his volunteer team from the slums is
                making a real impact by giving food and milk to the needy. Found
                out that they have arranged some curfew passes to reach out to
                help people. Commendable!
              </p>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col xs="auto">
              <StaticImage
                width={300}
                height={300}
                src="../images/jagriti.webp"
                className="d-block w-100 testimonial-img"
                alt="First slide"
              />
            </Col>
            <Col className="justify-content-center d-flex flex-column">
              <h3>Jagriti Dwivedi</h3>
              <p>
                I have witnessed very high-impact results on the ground, and
                direct action philosophy during all my regular visits to the
                areas managed by Swabhimaan. Even in these tough and trying
                Covid times, Swabhimaan has risen to occasion and served all the
                needy very well even in lock-down situations. Kudos to them,
                their donors and volunteers for being there when needed the
                most.{" "}
              </p>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonials;
