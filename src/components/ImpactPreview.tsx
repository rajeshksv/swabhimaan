import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const ImpactPreview = () => {
  return (
    <div className="my-4">
      <h3 className="text-center my-6">Progress </h3>
      <Row>
        <Col sm={4}>
          <ImpactPreviewCard />
        </Col>
        <Col sm={4}>
          <ImpactPreviewCard />
        </Col>
        <Col sm={4}>
          <ImpactPreviewCard />
        </Col>
      </Row>
    </div>
  );
};

const ImpactPreviewCard = () => {
  return (
    <>
      <Card>
        <Card.Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa
          fugit a pariatur natus quod dolor! Ex eveniet nulla cupiditate facere
          qui, quos corrupti sunt dolorum atque consequatur ab voluptates?
        </Card.Body>
      </Card>
    </>
  );
};
export default ImpactPreview;
