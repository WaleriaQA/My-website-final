import React from "react";
import Carousel from "./Carousel";
import useResize from "./useResize";

const AllGallery = () => {
  const isPortrait = useResize();
  return (
    <div style={{ pointerEvents: isPortrait ? "" : "none" }}>
      <Carousel />
    </div>
  );
};

export default AllGallery;
