import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const SchoolsAndTuitions = () => {
  return (
    <>
      <Container className="mb-5">
        <h3 className="py-5">Schools & Tuition</h3>
        <Card>
          <Card.Body>
            <Row>
              {/* <Col xs={12} md={6}>
                <StaticImage
                  className="float-left"
                  alt="school"
                  src="../../images/school.webp"
                ></StaticImage>
              </Col> */}
              <Col>
                <StaticImage
                  className="float-left mr-5"
                  alt="school"
                  src="../../images/school.webp"
                ></StaticImage>
                <div>
                  <div>
                    The central and state governments in India promise mandatory
                    and free primary education to all children through public
                    schools. However the physical and teacher quality at these
                    schools in Bangalore are so poor that they act as little
                    more than mid-day meal outlets for most kids. Teachers are
                    underpaid, under-qualified and frequently absent.
                  </div>
                  <div className="mb-4">
                    Several private schools have sprung up within the slums to
                    fill this need. In spite of the many challenges they face,
                    these schools are considered a better alternative by
                    parents. However, most have trouble paying the average
                    annual tuition fee of around Rs 8000. Most families have to
                    choose between their kids’ education and other pressing
                    needs. Forced drop outs due to financial difficulties are
                    all too common.
                  </div>

                  <div className="mb-4">
                    Swabhimaan helps parents meet this challenge by extending
                    financial aid to the best students. To best utilize our
                    limited resources, we conduct diagnostic tests in english,
                    science, math and civics just before the start of each
                    school year. Close to 1000 students turn up for these, of
                    which the top 100 kids are are supported in the form of
                    tuition reimbursement.
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
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default SchoolsAndTuitions;
