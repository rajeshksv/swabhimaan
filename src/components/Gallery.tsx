import React from "react";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "../images/icon.png",
    width: 4,
    height: 3,
  },
  {
    src: "../images/icon.png",
    width: 1,
    height: 1,
  },
];

const GalleryPhotos = () => {
  return <Gallery photos={photos} />;
};

export default GalleryPhotos;
