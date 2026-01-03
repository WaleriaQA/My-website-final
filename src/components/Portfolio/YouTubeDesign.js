import React from "react";

import useResize from "../Gallery/useResize";

const YouTubeDesign = () => {
  const isPortrait = useResize();
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

export default YouTubeDesign;
