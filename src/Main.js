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
import ModalMenu from "./components/UI/ModalMenu";
import SocialLinks from "./components/UI/SocialLinks";

import useTheme from "./theme/useTheme";

const HEADER_OFFSET = 110;

const Main = () => {
  /* ===== ORIENTATION ===== */
  const [isPortrait, setIsPortrait] = useState(
    window.innerWidth > window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerWidth > window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ===== THEME ===== */
  const { theme, isDarkTheme, toggleTheme } = useTheme();

  /* ===== REFS ===== */
  const coursesRef = useRef(null);
  const aboutRef = useRef(null);
  const plannedRef = useRef(null);
  const reviewsRef = useRef(null);
  const guaranteesRef = useRef(null);
  const socialsRef = useRef(null);

  const scrollToRef = (ref) => {
    if (!ref?.current) return;
    window.scrollTo({
      top: ref.current.offsetTop - HEADER_OFFSET,
      behavior: "smooth",
    });
  };

  /* ===== MODAL MENU ===== */
  const [showModalMenu, setShowModalMenu] = useState(false);

  const closeModalAndScroll = (ref) => {
    scrollToRef(ref);
    setShowModalMenu(false);
  };

  return (
    <div>
      <Header
        theme={theme}
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        onCourses={() => scrollToRef(coursesRef)}
        onAbout={() => scrollToRef(aboutRef)}
        onPlanned={() => scrollToRef(plannedRef)}
        onReviews={() => scrollToRef(reviewsRef)}
        onGuarantees={() => scrollToRef(guaranteesRef)}
        onSocials={() => scrollToRef(socialsRef)}
        handleOpenModalMenu={() => setShowModalMenu(true)}
      />

      <ModalMenu show={showModalMenu} onClose={() => setShowModalMenu(false)}>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(coursesRef)}
        >
          Курсы
        </button>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(aboutRef)}
        >
          Обо мне
        </button>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(plannedRef)}
        >
          Планируется
        </button>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(reviewsRef)}
        >
          Отзывы
        </button>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(guaranteesRef)}
        >
          Гарантии
        </button>
        <button
          className="link-like"
          onClick={() => closeModalAndScroll(socialsRef)}
        >
          Соцсети
        </button>
      </ModalMenu>

      <Welcome isPortrait={isPortrait} />

      <div ref={coursesRef}>
        <Courses />
      </div>

      <div ref={aboutRef}>
        <AboutMe isPortrait={isPortrait} />
      </div>

      <div ref={plannedRef}>
        <Portfolio isPortrait={isPortrait} />
      </div>

      <div ref={reviewsRef}>
        <Reviews isPortrait={isPortrait} />
      </div>

      <div ref={guaranteesRef}>
        <Guarantees isPortrait={isPortrait} />
      </div>

      <div ref={socialsRef}>
        <SocialLinks />
      </div>

      <Footer />
      <ScrollUpButton isPortrait={isPortrait} />
    </div>
  );
};

export default Main;
