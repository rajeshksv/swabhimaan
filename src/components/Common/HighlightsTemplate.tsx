import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaHandPointRight } from "react-icons/all";

const HighlightsTemplate = ({ content }: { content: string[] }) => {
  return (
    <div className="my-5">
      <Container>
        <h3 className="mb-5">Highlights</h3>
        <ListGroup>
          {content.map((item, index) => (
            <ListGroup.Item key={index}>
              <FaHandPointRight style={{ color: "gold" }} />
              <span className="ml-4">{item}</span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default HighlightsTemplate;
