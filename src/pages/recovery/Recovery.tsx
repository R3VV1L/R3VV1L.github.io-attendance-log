// @ts-ignore
import React from 'react';
import './Recovery.css';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';

export const Recovery = () => {
    return (
        <section className="forgot-section">
            <div className="svg-container">
                <SguSvg />
            </div>
            <p className="forgot-head-text">Восстановление пароля</p>
            <p className="forgot-info-text">
                Введите ваш email для отправки инструкции по восстановлению
                пароля
            </p>
            <form className="forgot-style" action="#" method="post">
                <div className="forgot-input">
                    <input
                        className="input-text"
                        type="email"
                        name="forgot-pass"
                        placeholder=" "
                        required
                    />
                    <label>Адрес эл. почты</label>
                </div>
            </form>
            <div className="forgot-submit">
                <button
                    className="forgot-submit-button"
                    type="submit"
                    name="forgot-submit"
                >
                    Отправить
                </button>
                <NavLink to="/auth" className="forgot-back-text">
                    На страницу входа
                </NavLink>
            </div>
        </section>
    );
};
