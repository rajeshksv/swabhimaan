import React from "react";
import { motion } from "framer-motion";
import { StaticImage } from "gatsby-plugin-image";
import { Carousel } from "react-bootstrap";
import DonateButton from "../Common/Donate";

const ImagesCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <motion.div whenHover={{ scale: 1.2 }}>
          <StaticImage
            src="../../images/swamifood.webp"
            className="d-block w-100 darken-image"
            height={600}
            alt="First slide"
          />
        </motion.div>
        <Carousel.Caption>
          <h3>
            "The greatness of humanity is not in being human, but in being
            humane"
          </h3>
          <p>Mahatma Gandhi</p>
          <DonateButton></DonateButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          height={600}
          src="../../images/banner.webp"
          className="d-block w-100 darken-image"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            "Darkness cannot drive out darkness; only light can do that. Hate
            cannot drive out hate; only love can do that."
          </h3>
          <p>Martin Luther King</p>
          <DonateButton></DonateButton>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StaticImage
          src="../../images/banner_1.webp"
          height={600}
          className="d-block w-100 darken-image"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>
            "Service to others is the rent you pay for your room here on earth"
          </h3>
          <p>Mohammad Ali</p>
          <DonateButton></DonateButton>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImagesCarousel;
