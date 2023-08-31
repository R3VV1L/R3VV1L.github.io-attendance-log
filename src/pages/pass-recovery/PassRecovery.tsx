// @ts-ignore
import React, { useState } from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';
import './PassRecovery.css';

export const PassRecovery: React.FC = () => {
    const [email, setMail] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMail(event.target.value);
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = '';
        }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = 'Введите адрес эл. почты';
        }
    };

    return (
        <div className="recovery-wrapper">
            <section className="recovery-logo-section">
                <SguSvg />
            </section>
            <section className="recovery-section">
                <h1 className="recovery-title">Восстановление пароля</h1>
                <h2 className="recovery-subtitle">
                    Введите адрес вашей электронной почты для отправки
                    инструкции по восстановлению пароля
                </h2>
                <form className="recovery-form" action="#" method="post">
                    <label className="recovery-text-label">
                        Адрес эл. почты
                    </label>
                    <input
                        className="recovery-input"
                        type="email"
                        name="recivery-email"
                        placeholder="Введите адрес эл. почты"
                        required
                        value={email}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </form>
                <div className="recovery-submit">
                    <button
                        className="recovery-submit-button"
                        type="submit"
                        name="recovery-submit"
                    >
                        Отправить
                    </button>
                    <NavLink to="/auth" className="recovery-back-text">
                        На страницу входа
                    </NavLink>
                </div>
            </section>
        </div>
    );
};
