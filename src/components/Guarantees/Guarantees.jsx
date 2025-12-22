import React from "react";

const Guarantees = ({ isPortrait }) => {
  return (
    <div
      className={isPortrait ? "guarantees-block" : "guarantees-block mobile"}
    >
      <h1
        style={{
          fontSize: isPortrait ? "50px" : "10vw",
          paddingBottom: isPortrait ? "20px" : "0",
        }}
      >
        <span class="title">Гарантии</span>
      </h1>

      <ol
        className={
          isPortrait ? "guarantees-points" : "guarantees-points mobile"
        }
      >
        <li className="point">
          Оплата через
          <span style={{ color: "#4824ff" }}> Udemy </span>
          контролирует безопасность денежных переводов.
        </li>
        <li className="point">
          Мой <span style={{ color: "#4824ff" }}> профессионализм </span>{" "}
          подтверждён опытом и{" "}
          <span style={{ color: "#4824ff" }}> положительными отзывами </span>{" "}
          <br /> студентов (см. выше).
        </li>
        <li className="point">
          Закрепите знания{" "}
          <span style={{ color: "#4824ff" }}> на практике </span> — в каждом
          курсе вас ждут упражнения и <br /> задания для применения теории.
        </li>
        <li className="point">
          В своих работах использую материалы строго
          <span style={{ color: "#4824ff" }}>
            {" "}
            разрешенные для личного <br /> и коммерческого испољзования.
          </span>
        </li>
        <li className="point">
          Поддержка на
          <span style={{ color: "#4824ff" }}> всех этапах обучения </span> — я
          отвечаю на вопросы и <br />
          помогаю разобраться с трудными темами.
        </li>
      </ol>
    </div>
  );
};

export default Guarantees;
