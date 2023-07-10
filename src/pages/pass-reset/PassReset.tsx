// @ts-ignore
import React from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';
import './PassReset.css';

export const PassReset = () => {
    return (
        <section className="auth-section">
            <SguSvg />
            <p className="auth-head-text">Сброс пароля</p>
            <p className="auth-info-text">
                Чтобы войти в систему, укажите новый пароль.
            </p>
            <form className="auth-style" action="#" method="post">
                <div className="auth-input">
                    <input
                        className="input-text"
                        type="password"
                        name="auth-pass"
                        placeholder=" "
                        required
                        // onChange={handleInputChange}
                    />
                    <label>Новый пароль</label>
                </div>
                <div className="auth-input">
                    <input
                        className="input-text"
                        type="password"
                        name="auth-pass"
                        placeholder=" "
                        required
                        // onChange={handleInputChange}
                    />
                    <label>Введите новый пароль еще раз</label>
                </div>
            </form>
            <div className="auth-submit">
                <button
                    className="auth-submit-button"
                    type="submit"
                    name="auth-submit"
                    // onClick={handleLogin}
                >
                    Сохранить
                </button>
            </div>
            <NavLink to="/auth" className="forgot-back-text">
                На страницу входа
            </NavLink>
        </section>
    );
};
