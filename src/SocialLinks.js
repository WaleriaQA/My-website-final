import React from "react";
import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <section className="social-section">
      <h3 className="social-title">Мои профили в социальных сетях</h3>
      <div className="social-icons">
        <a href="https://youtube.com/@itscorpio8" target="_blank" rel="noreferrer">
          <img src="/icons/youtube.svg" alt="YouTube" />
        </a>
        <a href="https://linkedin.com/in/waleria-stojanowska/" target="_blank" rel="noreferrer">
          <img src="/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/WaleriaQA" target="_blank" rel="noreferrer">
          <img src="/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/waleriaqa/" target="_blank" rel="noreferrer">
          <img src="/icons/download.jpeg" alt="Instagram" />
        </a>
        <a href="https://t.me/itbulgaria8" target="_blank" rel="noreferrer">
          <img src="/icons/telegram.svg" alt="Telegram" />
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
