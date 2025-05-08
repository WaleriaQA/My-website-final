import React from "react";
import Carousel from "./Carousel";
import Resize from "./Resize";

const AllGallery = () => {
  const isPortrait = Resize();
  return (
    <div style={{ pointerEvents: isPortrait ? "" : "none" }}>
      <Carousel/>
     
    </div>
  );
};

export default AllGallery;
