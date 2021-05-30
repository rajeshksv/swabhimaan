import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CauseCard from "../components/Common/CauseCard";
import Header from "../components/Common/Header";
import Impact from "../components/Common/Impact";

import HighlightsTemplate from "../components/Common/HighlightsTemplate";
import {
  GiOpenedFoodCan,
  MdLocalGroceryStore,
  MdTimeline,
} from "react-icons/all";
import "../styles/index.scss";

const highlights = [
  "Started in 2004",
  "In parternship with 3 IT offices - Intuit, Amadeas, Target",
  "Serves 1000 meals per day till Covid",
  "Post Covid, partnered with Civil society. Serving 10k meals per day till date",
  "Serves at Kalasipalya, Yeshwantpur railway station as well",
  "Provides Grocery kits - dal, wheat, atta, oil sufficient for 10-12 days a family",
];

const metrics = [
  { 
    text: "Pre Covid Daily Meals", 
    value: 1000, 
    Icon: GiOpenedFoodCan, 
    color: "#f06626" 
  },
  {
    text: "Post Covid Daily Meals",
    value: 10000,
    Icon: GiOpenedFoodCan,
    color: "#bf271a",
  },
  {
    text: "Grocery Kits per month",
    value: 1500,
    Icon: MdLocalGroceryStore,
    color: "#ffc925",
  },
  {
    text: "Running Since",
    value: 6,
    Icon: MdTimeline,
    color: "#57b22f",
  },
];

const Food = () => {
  return (
    <div>
      <Header />
      <StaticImage
        height={600}
        src="../images/food_distribution.webp"
        className="d-block w-100 "
        alt="First slide"
      />
      <Impact metrics={metrics} />
      <HighlightsTemplate content={highlights} />;
      <Container>
        <h2>Coverage</h2>
      </Container>
      <CauseCard header="Food Collection">
        <Row>
          <Col>
            <StaticImage
              className="float-left mr-5"
              alt="school"
              src="../../images/food_distribution.webp"
            ></StaticImage>
            <div>
              <div>
              Bound by the million dollar mansions of Koramangala on one side, and the upscale city center on the other, is Bangalore’s largest slum. This runs through the neighborhoods of Rajendra Nagar, LR Nagar, Neelsandra, Vivek Nagar and then on to Adugodi. Imagine all the regular problems you see in Bangalore – poor hygiene and sanitation, awful roads, lack of drinking water, inconsistent power – then multiply it a 100 times. This is the sad reality in the slums. Over one lakh people co-exist with animals, disease, and much misery, trying to plough through the day
              </div>
              <div className="mb-4">
              Of all the challenges, the most urgent is hunger. That most basal of human need. Lacs of grown-ups and children go to bed hungry. Or dive through the many piles of awful trash because they can’t bear it anymore.
              </div>

              <div className="mb-4">
              But a different story unfolds within a few kilometers of this scene. The many corporate houses where the upwardly mobile of our city work have food in their cafeterias that their neighbours in the slums can only dream of. There is warm roti and rice – many choices of curries. Even salads and desserts. Much needed nutrition that is so close, yet so far.
              </div>

              <div className="mb-4">
              And each day, after lunch – a lot of food is left over in the cafeterias. Perishable stuff that cannot be stored for the following day. Ergo, the food that could make such a difference to people minutes from them – instead goes to the dustbin.
              </div>

              <div className="mb-4">
              Swabhimaan is trying to bridge this supply and demand. For the past year or so, we have been collecting this leftover food after lunch, and distributing it the same day in the slums. We’ve arranged a TATA ace with driver, vessels and containers, and a small shop which functions as distribution hub. With just 2 corporates on board, we are able to feed 500 people each day. In other words, we distribute close to 10,000 meals a month at a cost of Rs. 40,000. A whopping 4 rupees per meal. Let’s say that again. 4 rupees – That’s all it takes to make sure that a child does not go hungry.
              </div>

              <div className="mb-4">
              Swabhimaan is a registered charitable trust and has been working in the slums since 2000. We test and extend scholarships to over a 100 children each year. We run two community clinics where consultation and medicine comes at an all-inclusive price of Rs. 10. We distribute free groceries each month and extend zero interest microfinance loans to women entrepreneurs.
              </div>

              <div className="mb-4">
              But because, the daily food drive meets such an urgent need, we frequently find ourselves pulling cash and resources from other programs to keep it running. We are hoping this drive on Milaap can help us secure the program and expand it. You can see pictures, news articles etc in the attachments. We encourage everyone in Bangalore to make time and witness the program first hand
              </div>
            </div>
          </Col>
        </Row>
      </CauseCard>
    </div>
  );
};

export default Food;
