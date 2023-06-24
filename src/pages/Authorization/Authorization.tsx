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
    <div className="form_auth_block">
      <div className="form_auth_block_content">
        <SguSvg />
        <p className="form_auth_block_head_text">Вход в личный кабинет</p>
        <p className="form_auth_block_text">
          Введите данные вашей учетной записи, чтобы продолжить.
        </p>
        <form className="form_auth_style" action="#" method="post">
          <label>Логин</label>
          <input
            className="input_text"
            type="email"
            name="auth_email"
            placeholder="Адрес эл. почты"
            required
            // value={user.username}
            onChange={handleInputChange}
          />
          <label>Пароль</label>
          <input
            className="input_text"
            type="password"
            name="auth_pass"
            placeholder="Введите пароль"
            required
            // value={user.password}
            onChange={handleInputChange}
          />
          <button
            className="form_auth_button"
            type="submit"
            name="form_auth_submit"
            onClick={handleLogin}
          >
            Войти
          </button>
        </form>
        <NavLink
          to="/authorization-guest"
          className="form_auth_block_text_student"
        >
          Я - студент
        </NavLink>
        <NavLink
          to="/forgot-password"
          className="form_auth_block_text_recovery"
        >
          Забыли логин или пароль?
        </NavLink>
      </div>
    </div>
  );
};
