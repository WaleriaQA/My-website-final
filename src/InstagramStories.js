import React from "react";
import Resize from "./Resize";

const InstagramStories = () => {
  const isPortrait = Resize();
  return (
    <div>
      {isPortrait ? (
        <div style={{ fontSize: "28px", textAlign: "center", margin: "220px" }}>
          Здесь пока нет работ
        </div>
      ) : (
        <div
          style={{ fontSize: "20px", textAlign: "center", margin: "20vw 5vw" }}
        >
          Здесь пока нет работ
        </div>
      )}
    </div>
  );
};

export default InstagramStories;
