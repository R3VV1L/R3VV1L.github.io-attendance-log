import React, { useState } from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink } from 'react-router-dom';
import './PassReset.css';

export const PassReset: React.FC = () => {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'reset-pass') {
            setPassword1(value);
        } else if (name === 'reset-pass2') {
            setPassword2(value);
        }
    };

    const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            event.target.placeholder = '';
        }
    };

    const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        if (!event.target.value) {
            if (event.target.name === 'reset-pass') {
                event.target.placeholder = 'Введите пароль';
            } else if (event.target.name === 'reset-pass2') {
                event.target.placeholder = 'Введите пароль еще раз';
            }
        }
    };

    return (
        <div className="reset-wrapper">
            <section className="reset-logo-section">
                <SguSvg />
            </section>
            <section className="reset-section">
                <h1 className="reset-title">Сброс пароля</h1>
                <h2 className="reset-subtitle">
                    Чтобы войти в систему, укажите новый пароль
                </h2>
                <form className="reset-form" action="#" method="post">
                    <label className="reset-text-label">Новый пароль</label>
                    <input
                        className="reset-input"
                        type="password"
                        name="reset-pass"
                        placeholder="Введите пароль"
                        required
                        value={password1}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                    <label className="reset-text-label">Повторите пароль</label>
                    <input
                        className="reset-input"
                        type="password"
                        name="reset-pass"
                        placeholder="Введите пароль еще раз"
                        required
                        value={password2}
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </form>
                <div className="reset-submit">
                    <button
                        className="reset-submit-button"
                        type="submit"
                        name="reset-submit"
                    >
                        Сохранить
                    </button>
                </div>
                <NavLink to="/auth" className="reset-back-text">
                    На страницу входа
                </NavLink>
            </section>
        </div>
    );
};
