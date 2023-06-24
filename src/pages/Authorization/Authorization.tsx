import React, { useState } from "react";
import "./Authorization.css";
import { SguSvg } from "../../assets/SguSvg.tsx";
import { NavLink } from "react-router-dom";

type User = {
  username: string;
  password: string;
};

export const Authorization = () => {
  const [user, setUser] = useState<User>({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleLogin = () => {
    // Проверяем, что пользователь ввел правильные учетные данные
    if (user.username === "admin" && user.password === "password") {
      setIsLoggedIn(true);
    } else {
      console.log("Неправильное имя пользователя или пароль", isLoggedIn);
    }
  };

  return (
    <div className="auth-block">
      <SguSvg />
      <p className="auth-block-head-text">Вход в личный кабинет</p>
      <p className="auth-block-info-text">
        Введите данные вашей учетной записи, чтобы продолжить.
      </p>
      <form className="auth-style" action="#" method="post">
        <label>Логин</label>
        <div className="auth-email-input">
          <input
            className="input-text"
            type="email"
            name="auth-email"
            placeholder="Адрес эл. почты"
            required
            // value={user.username}
            onChange={handleInputChange}
          />
        </div>  
        <label>Пароль</label>
        <div className="auth-pass-input">
          <input
            className="input-text"
            type="password"
            name="auth-pass"
            placeholder="Введите пароль"
            required
            // value={user.password}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="auth-submit-button"
          type="submit"
          name="auth-submit"
          onClick={handleLogin}
        >
          Войти
        </button>
      </form>
      <NavLink
        to="/authorization-guest"
        className="auth-block-student-text"
      >
        Я - студент
      </NavLink>
      <NavLink
        to="/forgot-password"
        className="auth-block-recovery-text"
      >
        Забыли логин или пароль?
      </NavLink>
    </div>
  );
};
