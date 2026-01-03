import React from "react";

const Header = ({
  theme,
  isDarkTheme,
  toggleTheme,
  onCourses,
  onAbout,
  onPlanned,
  onReviews,
  onGuarantees,
  onSocials,
  handleOpenModalMenu,
}) => {
  return (
    <header>
      <div className="navigation">
        {/* --- DESKTOP MENU --- */}

        <div className="menu">
          <button type="button" onClick={onCourses} className="link-like">
            Курсы
          </button>

          <button type="button" onClick={onAbout} className="link-like">
            Обо мне
          </button>

          <button type="button" onClick={onPlanned} className="link-like">
            Планируется
          </button>

          <button type="button" onClick={onReviews} className="link-like">
            Отзывы
          </button>

          <button type="button" onClick={onGuarantees} className="link-like">
            Гарантии
          </button>

          <button type="button" onClick={onSocials} className="link-like">
            Мои соцсети
          </button>
        </div>

        {/* --- DESKTOP BUTTONS --- */}

        <div className="header-buttons">
          <a
            href="https://t.me/itbulgaria8"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className={
              theme === "light" ? "icon telegram light" : "icon telegram dark"
            }
          />

          <a
            href="https://www.instagram.com/waleriaqa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={
              theme === "light" ? "icon instagram light" : "icon instagram dark"
            }
          />

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
                transform: isDarkTheme ? "translateX(34px)" : "translateX(0)",
              }}
            />
          </div>
        </div>

        {/* --- MOBILE BUTTONS + BURGER --- */}

        <div className="header-buttons-mobile">
          <button
            type="button"
            onClick={handleOpenModalMenu}
            aria-label="Открыть меню"
            className={theme === "light" ? "icon-menu light" : "icon-menu dark"}
          />

          <a
            href="https://t.me/itbulgaria8"
            target="_blank"
            rel="noreferrer"
            aria-label="Telegram"
            className={
              theme === "light" ? "icon telegram light" : "icon telegram dark"
            }
          />

          <a
            href="https://www.instagram.com/waleriaqa/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className={
              theme === "light" ? "icon instagram light" : "icon instagram dark"
            }
          />

          <div className="switch" onClick={toggleTheme}>
            <div
              className={theme === "light" ? "theme light" : "theme dark"}
              style={{
                transform: isDarkTheme ? "translateX(34px)" : "translateX(0)",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
