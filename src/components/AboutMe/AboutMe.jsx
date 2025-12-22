const AboutMe = ({ isPortrait }) => {
  return (
    <>
      <section className={isPortrait ? "about-me" : "about-me mobile"}>
        <div
          className={
            isPortrait
              ? "about-me-title-wrapper"
              : "about-me-title-wrapper mobile"
          }
        >
          <span className="about-me-title">Обо мне</span>
        </div>

        <div
          className={
            isPortrait ? "about-me-content" : "about-me-content mobile"
          }
        >
          <div
            className={
              isPortrait ? "about-me-photo-box" : "about-me-photo-box mobile"
            }
          >
            <img
              src="./images/me.png"
              alt="Waleria Stojanowska"
              className="about-me-photo"
            />
          </div>

          <div
            className={
              isPortrait ? "about-me-text-box" : "about-me-text-box mobile"
            }
          >
            <p className="about-me-text">
              Я — <strong>Waleria Stojanowska</strong>, QA Engineer с
              международным опытом, преподаватель и автор курсов. <br />
              Сфера IT — моё любимое дело, которое вдохновляет и каждый день
              приносит радость. <br />
              Я искренне верю, что обучение должно быть понятным, интересным и
              поддерживающим. <br />
              Мне важно не просто передавать знания — я хочу помочь каждому
              студенту поверить в себя и с уверенностью сделать шаг в мир IT.
            </p>
          </div>
        </div>

        <div className="about-me-button-wrapper">
          <button
            className="about-me-button"
            onClick={() =>
              window.open(
                "https://www.udemy.com/user/waleria-stojanowska/",
                "_blank"
              )
            }
          >
            Перейти в профиль Udemy
          </button>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
