import React, { useState } from 'react';
import './Authorization.css';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';

type User = {
    username: string;
    password: string;
};

export const Authorization = () => {
    const [user, setUser] = useState<User>({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    };

    const handleLogin = () => {
        // Проверяем, что пользователь ввел правильные учетные данные
        if (user.username === 'admin@mail.ru' && user.password === 'password') {
            setIsLoggedIn(true);
        } else {
            console.log('Неправильное имя пользователя или пароль', isLoggedIn);
        }
    };

    return (
        <section className="auth-section">
            <SguSvg />
            <p className="auth-head-text">Вход в личный кабинет</p>
            <p className="auth-info-text">
                Введите данные вашей учетной записи
            </p>
            <form className="auth-style" action="#" method="post">
                <div className="auth-input">
                    <input
                        className="input-text"
                        type="email"
                        name="auth-email"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label>Адрес эл. почты</label>
                </div>
                <div className="auth-input">
                    <input
                        className="input-text"
                        type="password"
                        name="auth-pass"
                        placeholder=" "
                        required
                        onChange={handleInputChange}
                    />
                    <label>Пароль</label>
                </div>
            </form>
            <div className="auth-submit">
                <button
                    className="auth-submit-button"
                    type="submit"
                    name="auth-submit"
                    onClick={handleLogin}
                >
                    Войти
                </button>
            </div>
            <NavLink to="/recovery" className="auth-forgot-text">
                Забыли пароль?
            </NavLink>
        </section>
    );
};
