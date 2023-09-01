import React, { useState } from 'react';
import { SguSvg } from '../../assets/SguSvg.tsx';
import { NavLink, useNavigate } from 'react-router-dom';
import './Authorization.css';
import { useDispatch } from 'react-redux';
import { setAdminStatus } from '../../API/auth/authActions.tsx';
import { Input } from '../../components/input/Input.tsx';
import { ArrowOutward } from '../../assets/arrows/ArrowOutward.tsx';

type User = {
    username: string;
    password: string;
};

export const Authorization: React.FC = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const [user, setUser] = useState<User>({ username: '', password: '' });
    // @ts-ignore
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // @ts-ignore
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false); // новое состояние для отображения сообщения об ошибке
    const navigate = useNavigate();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
        if (name === 'auth-email') {
            setEmail(value);
        } else if (name === 'auth-pass') {
            setPassword(value);
        }
    };

    const handleLogin = () => {
        // Проверяем, что пользователь ввел правильные учетные данные
        if (email === 'admin@mail.ru' && password === 'password') {
            dispatch(setAdminStatus(true));
            navigate('/deanery/admin');
            console.log('admin');
        } else if (email === 'student@mail.ru' && password === 'password') {
            dispatch(setAdminStatus(false));
            navigate('/attendance');
            console.log('student');
        } else {
            // устанавливаем значение isError в true, если данные неверны
            setIsError(true);
            console.log('Неправильный логин или пароль', isLoggedIn);
        }
    };

    return (
        <>
            <div className="auth-wrapper">
                <section className="auth-logo-section">
                    <SguSvg />
                </section>
                <section className="auth-section">
                    <h1 className="auth-title">Вход в личный кабинет</h1>
                    <h2 className="auth-subtitle">
                        Введите данные вашей учетной записи
                    </h2>
                    <form className="auth-form" action="#" method="post">
                        <Input
                            type="email"
                            name="auth-email"
                            placeholder="Введите Логин"
                            required
                            value={email}
                            onChange={handleInputChange}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    handleLogin();
                                }
                            }}
                        />
                    </form>
                    <form className="auth-form" action="#" method="post">
                        <Input
                            type="password"
                            name="auth-pass"
                            placeholder="Введите Пароль"
                            required
                            value={password}
                            onChange={handleInputChange}
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    handleLogin();
                                }
                            }}
                        />
                        {isError && ( // условие для отображения сообщения об ошибке
                            <p className="auth-error-text">
                                Неверный логин или пароль
                            </p>
                        )}
                    </form>
                    <section className="auth-control">
                        <button
                            className="auth-submit-button"
                            type="submit"
                            name="auth-submit"
                            onClick={handleLogin}
                        >
                            Войти
                        </button>
                    </section>
                    <NavLink to="/pass-recovery" className="auth-forgot-text">
                        Забыли логин или пароль?
                        <ArrowOutward />
                    </NavLink>
                </section>
            </div>
        </>
    );
};
