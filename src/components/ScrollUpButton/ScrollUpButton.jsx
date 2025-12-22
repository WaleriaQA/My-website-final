import React, { useEffect, useState } from "react";

const ScrollUpButton = ({ isPortrait }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className={`
    ${isPortrait ? "btn-up" : "btn-up mobile"}
    ${scroll > 600 ? "visible" : ""}
  `}
      onClick={scrollToTop}
    />
  );
};

export default ScrollUpButton;
