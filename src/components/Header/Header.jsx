const Header = ({
  isPortrait,
  theme,
  isDarkTheme,
  toggleTheme,
  upButton,
  toBlock,
  handleOpenModalMenu,
}) => {
  return (
    <header>
      {isPortrait ? (
        <div className="navigation">
          <div className="menu">
            <a onClick={upButton}>Курсы</a>
            <a
              onClick={(e) => toBlock(e.target.getAttribute("height"))}
              height="700"
            >
              Обо мне
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
            <a
              onClick={(e) => toBlock(e.target.getAttribute("height"))}
              height="2500"
            >
              Мои соцсети
            </a>
          </div>

          <div className="header-buttons">
            <button
              onClick={() =>
                window.open(
                  "https://www.udemy.com/user/waleria-stojanowska/",
                  "_blank"
                )
              }
              className="btn"
            >
              Мой профиль Udemy
            </button>

            <a
              href="https://t.me/itbulgaria8"
              target="_blank"
              className={
                theme === "light" ? "icon telegram light" : "icon telegram dark"
              }
            />
            <a
              href="https://www.instagram.com/waleriaqa/"
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
                  transform: isDarkTheme ? "translateX(34px)" : "translate(0)",
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
                transform: isDarkTheme ? "translateX(8.6vw)" : "translate(0)",
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
              href="https://www.instagram.com/waleriaqa/"
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
  );
};
export default Header;
