import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Courses from "./components/Courses/Courses";
import AboutMe from "./components/AboutMe/AboutMe";
import Portfolio from "./components/Portfolio/Portfolio";
import Reviews from "./components/Reviews/Reviews";
import Guarantees from "./components/Guarantees/Guarantees";
import Footer from "./components/Footer/Footer";

import ScrollUpButton from "./components/ScrollUpButton/ScrollUpButton";

import AllGallery from "./AllGallery";

import YouTubeThumbnails from "./YouTubeThumbnails";
import YouTubeDesign from "./YouTubeDesign";
import InstagramStories from "./InstagramStories";
import Review from "./Review";
import Theme from "./Theme";
import ModalMenu from "./ModalMenu";
// import Resize from "./Resize";
import SocialLinks from "./SocialLinks";
import Banners from "./Banners";

const Main = () => {
  // const isPortrait = Resize();

  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth > window.innerHeight
  );
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { theme, setTheme } = Theme();
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const toggleTheme = () => {
    if (isDarkTheme) {
      lightTheme();
    } else {
      darkTheme();
    }
    setIsDarkTheme(!isDarkTheme);
  };

  const lightTheme = () => {
    setTheme("light");
  };

  const darkTheme = () => {
    setTheme("dark");
  };

  const renderComponent = () => {
    switch (selectedCategory) {
      case "All":
        return <AllGallery />;
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

  const [showModal, setShowModal] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModalMenu = () => {
    setShowModalMenu(true);
  };

  const handleCloseModalMenu = () => {
    setShowModalMenu(false);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Header
        isPortrait={isPortrait}
        theme={theme}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        upButton={upButton}
        toBlock={toBlock}
        handleOpenModalMenu={handleOpenModalMenu}
      />
      <ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
        <a onClick={upButton}>Курсы</a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="2500"
        >
          Обо мне
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="3500"
        >
          Планируется
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="4000"
        >
          Отзывы
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="5000"
        >
          Гарантии
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="6200"
        >
          Соцсети
        </a>
      </ModalMenu>
      <Welcome isPortrait={isPortrait} />
      <Courses />
      <AboutMe isPortrait={isPortrait} />
      <Portfolio
        isPortrait={isPortrait}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        renderComponent={renderComponent}
      />
      <Reviews isPortrait={isPortrait} />
      <Guarantees isPortrait={isPortrait} />
      <SocialLinks />
      <Footer />
      <ScrollUpButton isPortrait={isPortrait} />;
    </div>
  );
};

export default Main;
