import React, { useState } from "react";

import AllGallery from "../Gallery/AllGallery";
import Banners from "../Banner/Banners";

import YouTubeThumbnails from "./YouTubeThumbnails";
import YouTubeDesign from "./YouTubeDesign";
import InstagramStories from "./InstagramStories";

const Portfolio = ({ isPortrait }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Banners":
        return <Banners />;
      case "YouTubeThumbnails":
        return <YouTubeThumbnails />;
      case "YouTubeDesign":
        return <YouTubeDesign />;
      case "InstagramStories":
        return <InstagramStories />;
      default:
        return <AllGallery />;
    }
  };

  return (
    <>
      <div className="portfolio-block">
        <div className="title-wrapper">
          <h1 className="main-title">
            <span className="title">Планируется</span>
          </h1>
        </div>

        <div className={isPortrait ? "" : "filter-scrollbar"}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <p
              className={`tag ${selectedCategory === "All" ? "selected" : ""}
                   ${isPortrait ? "" : "mobile"}`}
              onClick={() => setSelectedCategory("All")}
            >
              Все курсы
            </p>

            <p
              className={`tag ${
                selectedCategory === "Banners" ? "selected" : ""
              } ${isPortrait ? "" : "mobile"}`}
              onClick={() => setSelectedCategory("Banners")}
            >
              Планируемые курсы
            </p>
          </div>
        </div>

        <div
          className="content"
          style={{ marginLeft: "-5vw", marginRight: "-5vw" }}
        >
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
