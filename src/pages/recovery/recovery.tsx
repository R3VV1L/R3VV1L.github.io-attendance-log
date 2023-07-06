// @ts-ignore
import React from "react";
import "./recovery.css";
import { SguSvg } from "../../assets/sgu-svg.tsx";
import { NavLink } from "react-router-dom";

export const Recovery = () => {
  return (
    <div className="forgot-block">
      <div className="svg-container">
        <SguSvg />
      </div>
      <p className="forgot-block-head-text">Восстановление пароля</p>
      <p className="forgot-block-info-text">
        Введите ваш email для отправки инструкции по восстановлению пароля
      </p>
      <form className="forgot-style" action="#" method="post">
        <div className="forgot-pass">
          <input
            className="email-input-text"
            type="email"
            name="forgot-pass"
            placeholder="Адрес эл. почты"
            required
          />
        </div>
      </form>
      <div className="forgot-block-submit">
        <NavLink to="/auth" className="forgot-block-auth-text">
          На страницу входа
        </NavLink>
        <button
          className="forgot-block-submit-button"
          type="submit"
          name="forgot-submit"
        >
          Отправить
        </button>
      </div>
    </div>
  );
};
