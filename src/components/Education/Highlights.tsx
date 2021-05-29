import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaHandPointRight } from "react-icons/all";

const Highlights = () => {
  return (
    <div className="my-5">
      <Container>
        <h3 className="mb-5">Highlights</h3>
        <ListGroup>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Started in <b>2002</b> .
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Adopted <b>4 schools</b> in the community covering over{" "}
              <b>250 students</b> per year
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Running since <b>20 years</b>, many have graduated and now
              becoming role models,leaders for younger generation.
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Teacher training via <b>TFI</b>. <b>20 teachers </b>teach per
              year.
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Providing breakfast and lunch for 60 students Tution training for
              8th, 9th, 10th class students
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Scholarships for bright students via Entrance tests.
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Running computer center for 4 years - Coding, Paint, Word. 12
              Desktops. 2 Teachers
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Running Library in partnership with Cosynook. Twice a week 3
              hours. Read story books, participate in speaking english since 3
              years
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Youth empowerment. Soft skills - English, GK interview skills for
              40-50 youth per year.
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              40 children per week go to neighboring playground in partnership
              with “Just for kicks” Montessori education, Train nursery
              teachers. 3 years
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Imporve Eng Grammer with Cilrey NGO. 3rd - 4th classes.
            </span>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHandPointRight style={{ color: "gold" }} />
            <span className="ml-4">
              Movies, Christmas gifts for school kids. Since 5-6 years
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Highlights;
