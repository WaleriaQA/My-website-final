import React, { useState, useEffect, useRef } from "react";
import AllGallery from "./AllGallery";
import Banners from "./Banners";
import YouTubeThumbnails from "./YouTubeThumbnails";
import YouTubeDesign from "./YouTubeDesign";
import InstagramStories from "./InstagramStories";
import Review from "./Review";
import Theme from "./Theme";
import ModalMenu from "./ModalMenu";
import Resize from "./Resize";

const Main = () => {
  const isPortrait = Resize();

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

  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const reviews = [
    <Review
      key={1}
      name="Milen Y."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Очень качественный курс для начинающих, рекомендую пройти, даже если вы уже знакомы с Cypress, здесь вы точно узнаете что-то новое для себя. Информации много и вся она очень детально объяснена."
    />,
    <Review
      key={2}
      name="Oleh V."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Курс понравился.

Отлично подойдет для совсем новичков Cypress, рассказывается все на очень простом уровне. По идее, даже с нулевыми знаниями в JS и автотестах - можно научиться делать такие же тесты, хотя для полноценной работы это только первый шаг."
    />,
    <Review
      key={3}
      name="Elina P."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Прошла курс. Он прекрасно подходит для тех, кто только начинает знакомиться с автоматизацией тестирования. Ментор подробно объясняет основы Cypress, что делает материал доступным и понятным даже для полных чайников в данной теме. Практические задания помогают закрепить знания на практике. Рекомендую!"
    />,
  ];

  const visibleReviews = 3;

  const handleScroll = () => {
    const box = containerRef.current;
    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = box.scrollWidth - 2 * width;
      box.style.scrollBehavior = "smooth";
    }

    if (box.scrollLeft >= box.scrollWidth - width) {
      box.style.scrollBehavior = "auto";
      box.scrollLeft = width;
      box.style.scrollBehavior = "smooth";
    }
  };

  const btnPrevReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;
  };

  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector(".review-card");
    reviewWidthRef.current = firstReview.clientWidth;
    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener("scroll", handleScroll);

    return () => {
      box.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header>
        {isPortrait ? (
          <div className="navigation">
            <div className="menu">
              <a onClick={upButton}>Курсы</a>
              <a
                onClick={(e) => toBlock(e.target.getAttribute("height"))}
                height="700"
              >
                Планируется
              </a>
              <a
                onClick={(e) => toBlock(e.target.getAttribute("height"))}
                height="1230"
              >
                Обо мне
              </a>
              <a
                onClick={(e) => toBlock(e.target.getAttribute("height"))}
                height="1920"
              >
                Отзывы
              </a>
              <a
                onClick={(e) => toBlock(e.target.getAttribute("height"))}
                height="2500"
              >
                Гарантии
              </a>
            </div>

            <div className="header-buttons">
              <button onClick={() => window.open("https://www.udemy.com/user/waleria-stojanowska/", "_blank")} className="btn">
              Мой профиль Udemy
              </button>

              <a
                href="https://t.me/itbulgaria8"
                target="_blank"
                className={
                  theme === "light"
                    ? "icon telegram light"
                    : "icon telegram dark"
                }
              />
              <a
                href="https://t.me/itbulgaria8"
                target="_blank"
                className={
                  theme === "light"
                    ? "icon instagram light"
                    : "icon instagram dark"
                }
              />

              <div className="switch" onClick={toggleTheme}>
                <div
                  className={theme === "light" ? "theme light" : "theme dark"}
                  style={{
                    transform: isDarkTheme
                      ? "translateX(38px)"
                      : "translate(0px)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="navigation">
            <div className="switch switch-mobile" onClick={toggleTheme}>
              <div
                className={
                  theme === "light"
                    ? "theme theme-mobile light"
                    : "theme theme-mobile dark"
                }
                style={{
                  transform: isDarkTheme
                    ? "translateX(8.6vw)"
                    : "translate(0px)",
                }}
              ></div>
            </div>

            <div className="header-buttons-mobile">
              <a
                href="https://t.me/itbulgaria8"
                target="_blank"
                className={
                  theme === "light"
                    ? "icon icon-mobile telegram light"
                    : "icon icon-mobile telegram dark"
                }
              />
              <a
                href="https://t.me/itbulgaria8"
                target="_blank"
                className={
                  theme === "light"
                    ? "icon icon-mobile instagram light"
                    : "icon icon-mobile instagram dark"
                }
              />

              <a
                onClick={handleOpenModalMenu}
                className={
                  theme === "light" ? "icon-menu light" : "icon-menu dark"
                }
              />
            </div>
          </div>
        )}
      </header>
      <ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
        <a onClick={upButton}>Обо мне</a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="700"
        >
          Услуги
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="1230"
        >
          Планируется
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="1920"
        >
          Отзывы
        </a>
        <a
          onClick={(e) => toBlock(e.target.getAttribute("height"))}
          height="2500"
        >
          Гарантии
        </a>
      </ModalMenu>

      

      {isPortrait ? (
        <div className="welcome-block">
          <div className="first-block">
            <h1>
               <span className="title">Курсы без переплат —  <br /> всё по честной цене</span>
            </h1>
            
          </div>
        
        </div>
      ) : (
        <div className="welcome-block mobile">
          <div className="main-image-box mobile">
            
            
           
          </div>

          <div className="first-block mobile">
            <h1>
              Тестировщик <span className="title">Курсы без переплат —  <br /> всё по честной цене</span>
            </h1>
            

            <button onClick={() => window.open("https://www.udemy.com/user/waleria-stojanowska/", "_blank")} className="btn mobile">
              Мой профиль Udemy
            </button>
          </div>
        </div>
      )}

<section className="courses-section">
  
  <div className="courses-container">

    <div className="course-card">
      <img 
      src="./images/cy.png" 
      alt="Cypress для новичков" 
      onClick={() => window.open("https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW", "_blank")}
    style={{ cursor: "pointer" }}/>
      
      <div className="course-content">
      <h3>Cypress для новичков: Твой путь к автоматизации тестирования</h3>

      <div className="course-author">
  <div className="avatar">
    <img src="./images/me.png" alt="Waleria Stojanowska" />
  </div>
  <div className="author-info">
    <p className="author-name">Waleria Stojanowska</p>
    <p className="author-title">QA Engineer, MIA</p>
  </div>
</div>
      <p className="course-description">
        Освоение Cypress для эффективной автоматизации тестирования веб-приложений.
        </p>
        <div className="course-button-wrapper">
      <a href="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW" target="_blank" rel="noopener noreferrer">Смотреть курс</a>
    </div>
    </div>
    </div>
    <div className="course-card">
      <img src="./images/js.png" alt="Краш-курс по JavaScript" onClick={() => window.open("https://www.udemy.com/course/javascript-guide-ru/?couponCode=LETSLEARNNOW", "_blank")}
    style={{ cursor: "pointer" }}/>
    
  <div className="course-content">
      <h3>Краш-курс по JavaScript для тестировщика: основы с нуля</h3>
      <div className="course-author">
  <div className="avatar">
    <img src="./images/me.png" alt="Waleria Stojanowska" />
  </div>
  <div className="author-info">
    <p className="author-name">Waleria Stojanowska</p>
    <p className="author-title">QA Engineer, MIA</p>
  </div>
</div>
      <p className="course-description">JavaScript - Освойте основы за 5 часов.</p>
      
    <div className="course-button-wrapper">
      <a href="https://www.udemy.com/course/javascript-guide-ru/?couponCode=LETSLEARNNOW" target="_blank" rel="noopener noreferrer">Смотреть курс</a>
    </div>
    </div>
    </div>
    <div className="course-card">
      <img src="./images/qainterview.png" alt="Подготовка к интервью на позицию QA" onClick={() => window.open("https://www.udemy.com/course/qa-interview-questions/?couponCode=LETSLEARNNOW", "_blank")}
    style={{ cursor: "pointer" }}/>
      <div className="course-content">
      <h3>Подготовка к интервью на позицию QA: от новичка до эксперта</h3>
      <div className="course-author">
  <div className="avatar">
    <img src="./images/me.png" alt="Waleria Stojanowska" />
  </div>
  <div className="author-info">
    <p className="author-name">Waleria Stojanowska</p>
    <p className="author-title">QA Engineer, MIA</p>
  </div>
</div>
      <p className="course-description">Более 700 вопросов с реальных собеседований для освоения теории тестирования и успешного прохождения интервью.</p>
      <div className="course-button-wrapper">
      <a href="https://www.udemy.com/course/qa-interview-questions/?couponCode=LETSLEARNNOW" target="_blank" rel="noopener noreferrer">Смотреть курс</a>
    </div>
    </div>
    </div>
  </div>
</section>


      

      <div className="portfolio-block">
        
        <div className="title-wrapper">
          <h1 className= "main-title">
          <span className="title">Планируется</span>
          </h1>
          </div>
        <div classname={isPortrait ? "" : "filter-scrollbar"}>
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
              }
                      ${isPortrait ? "" : "mobile"}`}
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

      <div className={isPortrait ? "review-block" : "review-block mobile"}>
        <h1 style={{ fontSize: isPortrait ? "50px" : "10vw" }}>Отзывы</h1>
        <p className={isPortrait ? "description" : "description mobile"}>
          Отзывы учащихся, написанные с их
          <span className="selecting"> личных аккаунтов</span>
          Udemy. Все прозрачно! <br /> Любой отзыв можно{" "}
          <span className="selecting"> открыть</span> на Udemy и{" "}
          <span className="selecting"> спросить</span> о впечатлениях от моих курсов
           <br /> лично у автора отзыва.
        </p>

        <div
          className={isPortrait ? "review-carausel" : "review-carausel mobile"}
        >
          <div
            className={
              isPortrait ? "review-container" : "review-container mobile"
            }
            ref={containerRef}
          >
            {reviews.slice(-visibleReviews)}
            {reviews}
            {reviews.slice(0, visibleReviews)}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p
            className={isPortrait ? "next-button" : "next-button mobile"}
            style={{ transform: "rotate(180deg)" }}
          >
            <p className="array-next-icon" onClick={btnPrevReview} />
          </p>
          <p className={isPortrait ? "next-button" : "next-button mobile"}>
            <p className="array-next-icon" onClick={btnNextReview} />
          </p>
        </div>
      </div>

      <div
        className={isPortrait ? "guarantees-block" : "guarantees-block mobile"}
      >
        <h1
          style={{
            fontSize: isPortrait ? "52px" : "10vw",
            paddingBottom: isPortrait ? "20px" : "0",
          }}
        >
          ГАРАНТИИ
        </h1>

        <ol
          className={
            isPortrait ? "guarantees-points" : "guarantees-points mobile"
          }
        >
          <li className="point">
            Оплату принимаю через платежную систему
            <span style={{ color: "#4824ff" }}> Название* </span>, которая
            контролирует <br />
            безопасность денежных переводов.
          </li>
          <li className="point">
            Убедиться в моей ответственности и профессионализме можно
            <span style={{ color: "#4824ff" }}> написав клиентам </span>,
            <br /> оставившим отзывы{" "}
            <span style={{ color: "#4824ff" }}> лично </span>в любой момент
            (отзывы клиентов выше).
          </li>
          <li className="point">
            Все <span style={{ color: "#4824ff" }}> авторские права </span> на
            работу переходат заказчику после виполненија заказа.
          </li>
          <li className="point">
            В своих работах испољзују материали строго
            <span style={{ color: "#4824ff" }}>
              {" "}
              разрешенние длја личного <br /> и коммерческого испољзованија
            </span>
            .
          </li>
        </ol>
      </div>

      <div className="footer"> © Workford</div>

      <button
        className={scroll < 1960 ? "" : isPortrait ? "btn-up" : "btn-up mobile"}
        onClick={upButton}
      ></button>
    </div>
  );
};

export default Main;
