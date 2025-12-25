import React, { useRef } from "react";
import Review from "../../Review";

const Reviews = ({ isPortrait }) => {
  const containerRef = useRef(null);

  const reviews = [
    <Review
      key={1}
      name="Milen Y."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Очень качественный курс для начинающих, рекомендую пройти, даже если вы уже знакомы с Cypress, здесь вы точно узнаете что-то новое для себя. Информации много и вся она очень детально объяснена."
    />,
    <Review
      key={2}
      name="Evgueni A."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Исчерпывающий и понятный курс для начинающих. Он представляет ясное введение в инструмент Cypress, позволяя студентам быстро освоить основы автоматизации тестирования."
    />,
    <Review
      key={3}
      name="Elina P."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="Прошла курс. Он прекрасно подходит для тех, кто только начинает знакомиться с автоматизацией тестирования. Практические задания помогают закрепить знания."
    />,
    <Review
      key={4}
      name="Alla M."
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="В принципе для новичков курс подходит.

Единественное - хотелось бы чуть большей глубины что ли, некоторые темы прям совсем по верхушкам, но с другой стороны курс и не позиционируется, как полный.

Некоторые задания из блока 9 не применимы, т.к. сайты, данные в ресурсах не доступны.

В целом мне понравилось, спасибо!"
    />,
    <Review
      key={5}
      name="Ksenia"
      link="https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW#reviews"
      text="классный лайфхак по селекторам сразу из сайпреса!"
    />,
    <Review
      key={6}
      name="Nadezhda G."
      link="https://www.udemy.com/course/javascript-guide-ru/learn/lecture/42960874#reviews"
      text="Как первый шаг в изучении JS очень рекомендую этот курс. Вся база подробно объяснена в понятной форме."
    />,
  ];

  const scrollByCard = (direction) => {
    const box = containerRef.current;
    const card = box.querySelector(".review-card");
    if (!box || !card) return;

    const gap = 16;

    box.scrollBy({
      left: direction * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className={isPortrait ? "review-block" : "review-block mobile"}>
      <h1 style={{ fontSize: isPortrait ? "50px" : "10vw" }}>
        <span className="title">Отзывы</span>
      </h1>

      <p className={isPortrait ? "description" : "description mobile"}>
        Отзывы учащихся, написанные с их
        <span className="selecting"> личных аккаунтов</span>
        Udemy. Все прозрачно!
      </p>

      <div className="review-carausel">
        <div className="review-container" ref={containerRef}>
          {reviews}
        </div>
      </div>

      {isPortrait && (
        <div style={{ display: "flex", justifyContent: "center", gap: "12px" }}>
          <button
            className="next-button"
            style={{ transform: "rotate(180deg)" }}
            onClick={() => scrollByCard(-1)}
          >
            <span className="array-next-icon" />
          </button>

          <button className="next-button" onClick={() => scrollByCard(1)}>
            <span className="array-next-icon" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Reviews;
