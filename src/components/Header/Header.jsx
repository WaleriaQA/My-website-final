import React from "react";

const Header = ({
  theme,
  isDarkTheme,
  toggleTheme,
  upButton,
  toBlock,
  handleOpenModalMenu,
}) => {
  return (
    <header>
      <div className="navigation">
        {/* ===== DESKTOP MENU ===== */}
        <div className="menu">
          <button type="button" onClick={upButton} className="link-like">
            Курсы
          </button>
          <button
            type="button"
            onClick={(e) => toBlock(e.target.getAttribute("height"))}
            height="700"
            className="link-like"
          >
            Обо мне
          </button>
          <button
            type="button"
            onClick={(e) => toBlock(e.target.getAttribute("height"))}
            height="1230"
            className="link-like"
          >
            Планируется
          </button>
          <button
            type="button"
            onClick={(e) => toBlock(e.target.getAttribute("height"))}
            height="1920"
            className="link-like"
          >
            Отзывы
          </button>
          <button
            onClick={(e) => toBlock(e.target.getAttribute("height"))}
            height="2500"
            className="link-like"
          >
            Гарантии
          </button>
          <button
            type="button"
            onClick={(e) => toBlock(e.target.getAttribute("height"))}
            height="2500"
            className="link-like"
          >
            Мои соцсети
          </button>
        </div>

        {/* ===== DESKTOP BUTTONS ===== */}
        {/* ===== DESKTOP BUTTONS ===== */}
        <div className="header-buttons">
          <a
            href="https://t.me/itbulgaria8"
            target="_blank"
            aria-label="Telegram"
            className={
              theme === "light" ? "icon telegram light" : "icon telegram dark"
            }
          />

          <a
            href="https://www.instagram.com/waleriaqa/"
            target="_blank"
            aria-label="Instagram"
            className={
              theme === "light" ? "icon instagram light" : "icon instagram dark"
            }
          />

          {/* 🔥 ВОТ СЮДА */}
          <button
            onClick={() =>
              window.open(
                "https://www.udemy.com/user/waleria-stojanowska/",
                "_blank"
              )
            }
            className="btn desktop"
          >
            Мой профиль Udemy
          </button>

          <div className="switch" onClick={toggleTheme}>
            <div
              className={theme === "light" ? "theme light" : "theme dark"}
              style={{
                transform: isDarkTheme ? "translateX(34px)" : "translate(0)",
              }}
            />
          </div>
        </div>

        {/* ===== MOBILE BUTTONS + BURGER ===== */}
        <div className="header-buttons-mobile">
          <a
            onClick={handleOpenModalMenu}
            className={theme === "light" ? "icon-menu light" : "icon-menu dark"}
          />

          <a
            href="https://t.me/itbulgaria8"
            target="_blank"
            aria-label="Telegram"
            className={
              theme === "light" ? "icon telegram light" : "icon telegram dark"
            }
          />

          <a
            href="https://www.instagram.com/waleriaqa/"
            target="_blank"
            aria-label="Instagram"
            className={
              theme === "light" ? "icon instagram light" : "icon instagram dark"
            }
          />

          {/* 🔥 ТОТ ЖЕ САМЫЙ SWITCH */}
          <div className="switch" onClick={toggleTheme}>
            <div
              className={theme === "light" ? "theme light" : "theme dark"}
              style={{
                transform: isDarkTheme ? "translateX(34px)" : "translate(0)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
