import React, { useRef, useEffect } from "react";
import Review from "../../Review";

const Reviews = ({ isPortrait }) => {
  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const visibleReviews = 3;

  const reviews = [
    <Review
      key={1}
      name="Milen Y."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Очень качественный курс..."
    />,
    <Review
      key={2}
      name="Oleh V."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Курс понравился..."
    />,
    <Review
      key={3}
      name="Elina P."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Прошла курс..."
    />,
  ];

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
    containerRef.current.scrollLeft -= reviewWidthRef.current;
  };

  const btnNextReview = () => {
    containerRef.current.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector(".review-card");

    if (!firstReview) return;

    reviewWidthRef.current = firstReview.clientWidth;
    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener("scroll", handleScroll);

    return () => box.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isPortrait ? "review-block" : "review-block mobile"}>
      <h1 style={{ fontSize: isPortrait ? "50px" : "10vw" }}>
        <span className="title">Отзывы</span>
      </h1>
      <p className={isPortrait ? "description" : "description mobile"}>
        Отзывы учащихся, написанные с их
        <span className="selecting"> личных аккаунтов</span>
        Udemy. Все прозрачно! <br /> Любой отзыв можно{" "}
        <span className="selecting"> открыть</span> на Udemy и{" "}
        <span className="selecting"> спросить</span> о впечатлениях от моих
        курсов
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
  );
};

export default Reviews;
