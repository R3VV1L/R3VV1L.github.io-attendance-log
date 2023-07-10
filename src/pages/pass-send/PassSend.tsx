// @ts-ignore
import React from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';
import './PassSend.css';

export const PassSend = () => {
    return (
        <section className="send-section">
            <div className="svg-container">
                <SguSvg />
            </div>
            <div>
                <p className="send-head-text">Восстановление пароля</p>
                <p className="send-info-text">
                    Письмо для восстановления пароля отправлено вам на почту
                </p>
                <NavLink to="/auth" className="send-back-text">
                    На страницу входа
                </NavLink>
            </div>
        </section>
    );
};
