const Courses = () => {
  return (
    <>
      <section className="courses-section">
        <div className="courses-container">
          <div className="course-card">
            <img
              src="./images/cy.png"
              alt="Cypress для новичков"
              onClick={() =>
                window.open(
                  "https://www.udemy.com/course/cypress-guide-ru/?couponCode=LETSLEARNNOW",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            />

            <div className="course-content">
              <h3>
                Cypress для новичков: Твой путь к автоматизации тестирования
              </h3>

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
                Освоение Cypress для эффективной автоматизации тестирования
                веб-приложений.
              </p>
              <div className="course-button-wrapper">
                <a
                  href="https://www.udemy.com/course/cypress-guide-ru/?couponCode=5D889CCCC18D8637734D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Смотреть курс
                </a>
              </div>
            </div>
          </div>

          <div className="course-card">
            <img
              src="./images/js.png"
              alt="Краш-курс по JavaScript"
              onClick={() =>
                window.open(
                  "https://www.udemy.com/course/javascript-guide-ru/?couponCode=LETSLEARNNOW",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            />

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
              <p className="course-description">
                JavaScript - Освойте основы за 5 часов.
              </p>

              <div className="course-button-wrapper">
                <a
                  href="https://www.udemy.com/course/javascript-guide-ru/?couponCode=FD568C6C82AC46C84324"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Смотреть курс
                </a>
              </div>
            </div>
          </div>
          <div className="course-card">
            <img
              src="./images/qainterview.png"
              alt="Подготовка к интервью на позицию QA"
              onClick={() =>
                window.open(
                  "https://www.udemy.com/course/qa-interview-questions/?couponCode=LETSLEARNNOW",
                  "_blank"
                )
              }
              style={{ cursor: "pointer" }}
            />
            <div className="course-content">
              <h3>
                Подготовка к интервью на позицию QA: от новичка до эксперта
              </h3>
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
                Более 700 вопросов с реальных собеседований для освоения теории
                тестирования и успешного прохождения интервью.
              </p>
              <div className="course-button-wrapper">
                <a
                  href="https://www.udemy.com/course/qa-interview-questions/?couponCode=914AF9D59E10770E083C"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Смотреть курс
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
