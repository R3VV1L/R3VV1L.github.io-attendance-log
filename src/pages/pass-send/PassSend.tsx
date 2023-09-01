// @ts-ignore
import React from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';
import './PassSend.css';
import { ArrowForward } from '../../assets/arrows/ArrowForward.tsx';

export const PassSend = () => {
    return (
        <div className="send-wrapper">
            <section className="auth-logo-section">
                <SguSvg />
            </section>
            <section className="send-section">
                <div>
                    <h1 className="send-title">Восстановление пароля</h1>
                    <h2 className="send-subtitle">
                        Письмо для восстановления пароля отправлено вам на почту
                    </h2>
                    <NavLink to="/auth" className="send-back-text">
                        На страницу входа
                        <ArrowForward />
                    </NavLink>
                </div>
            </section>
        </div>
    );
};
