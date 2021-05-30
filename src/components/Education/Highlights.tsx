import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import { FaHandPointRight } from "react-icons/all";
import HighlightsTemplate from "../Common/HighlightsTemplate";

const content = [
  "Started in 2002",
  "Adopted 4 schools in the community covering over 250 students per year",
  "Running since 20 years, many have graduated and now becoming role models,leaders for younger generation",
  "Teacher training via TFI 20 teachers teach per year.",
  "Providing breakfast and lunch for 60 students Tution training for 8th, 9th, 10th class students",
];

const Highlights = () => {
  return <HighlightsTemplate content={content} />;
};

export default Highlights;
