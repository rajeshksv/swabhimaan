import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Team = () => {
  return (
    <div className="my-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
      <div>
        <Container>
          <h3 className="text-center py-5" style={{ color: "#fff" }}>
            Our Team
          </h3>
          <Row noGutters>
            <Col>
              <Card className="m-4">
                <StaticImage
                  className="testimonial-img"
                  width={300}
                  height={300}
                  alt="founder"
                  src="../../images/venkatraman.webp"
                />
                <Card.Header>
                  <h5>Venkatraman Iyer</h5>
                </Card.Header>
                <Card.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit exercitationem facere porro odit placeat,
                  consequuntur pariatur quam quas quisquam in?
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-4">
                <StaticImage
                  className="testimonial-img"
                  width={300}
                  height={300}
                  alt="founder"
                  src="../../images/abhishek.webp"
                />
                <Card.Header>
                  <h5>Abhishek</h5>
                </Card.Header>
                <Card.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit exercitationem facere porro odit placeat,
                  consequuntur pariatur quam quas quisquam in?
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="m-4">
                <StaticImage
                  className="testimonial-img"
                  width={300}
                  height={300}
                  alt="founder"
                  src="../../images/abhishek.webp"
                />
                <Card.Header>
                  <h5>Abhishek</h5>
                </Card.Header>
                <Card.Body>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit exercitationem facere porro odit placeat,
                  consequuntur pariatur quam quas quisquam in?
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Team;
