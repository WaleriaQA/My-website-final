const Welcome = ({ isPortrait }) => {
  return (
    <>
      {isPortrait ? (
        <div className="welcome-block">
          <div className="first-block">
            <h1 className="title-heading">
              Курсы без переплат — <br />
              <span className="title">всё по честной цене</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="welcome-block mobile">
          <div className="main-image-box mobile"></div>

          <div className="first-block mobile">
            <h1>
              <span className="title">
                Курсы без переплат — <br /> всё по честной цене
              </span>
            </h1>

            <button
              onClick={() =>
                window.open(
                  "https://www.udemy.com/user/waleria-stojanowska/",
                  "_blank"
                )
              }
              className="btn mobile"
            >
              Мой профиль Udemy
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcome;
