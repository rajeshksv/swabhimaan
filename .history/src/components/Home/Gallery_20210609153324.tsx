import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const Gallery = () => {
  return (
    <>
      <Row>
        <Col xs={12} sm={6} md={3}>
          <motion.div whileHover={{scale: 1.2}}>
          <StaticImage
            height={350}
            src="../../images/gallery/collate1.webp"
            alt="collate"
            ></StaticImage>
          </motion.div>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate2.webp"
            alt="collate"
            ></StaticImage>
          </motion.div>
            
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate3.webp"
            alt="collate"
          ></StaticImage>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate4.webp"
            alt="collate"
          ></StaticImage>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate5.webp"
            alt="collate"
          ></StaticImage>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate6.webp"
            alt="collate"
          ></StaticImage>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate7.webp"
            alt="collate"
          ></StaticImage>
        </Col>
        <Col xs={12} sm={6} md={3}>
          <motion.div>
          <StaticImage
            height={350}
            src="../../images/gallery/collate8.webp"
            alt="collate"
          ></StaticImage>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
