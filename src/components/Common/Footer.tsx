import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import {
  IoLogoFacebook,
  AiOutlineTwitter,
  RiInstagramFill,
} from "react-icons/all";
import "../../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="my-6">
          <Col sm={4}>
            <div className="p-4">
              <h3 className="mb-4">Contact Info</h3>
              <div>
                <div className="my-2">B 405 Raheja Residency 3rd Block,</div>
                <div className="my-2">Koramangala Bangalore, KA, INDIA</div>
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="p-4">
              <h3 className="mb-4">Fundraise For</h3>
              <div>
                <IoLogoFacebook size={40} />
                <AiOutlineTwitter size={40} />
                <RiInstagramFill size={40} />
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="p-4">
              <h3 className="mb-4">Resources</h3>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
