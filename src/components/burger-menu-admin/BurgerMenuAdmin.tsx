import React, { useState } from 'react';
import './BurgerMenuAdmin.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const BurgerMenuAdmin: React.FC = () => {
    // @ts-ignore
    const isAdmin = useSelector((state) => state.auth.isAdmin);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    console.log(isAdmin);

    return (
        <div className="burger-menu">
            <button
                className={`burger-button ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                <span className="bar burger-icon1"></span>
                <span className="bar burger-icon2"></span>
                <span className="bar burger-icon3"></span>
            </button>

            {isOpen && (
                <div className="block-menu">
                    {isAdmin ? (
                        <>
                            <div className="menu-items">
                                <NavLink to="/deanery/groups">Группы</NavLink>
                            </div>
                            <div className="menu-items">
                                <NavLink to="/deanery/subgroups">
                                    Подгруппы
                                </NavLink>
                            </div>
                            <div className="menu-items">
                                <NavLink to="/deanery/teachers">
                                    Преподаватели
                                </NavLink>
                            </div>
                            <div className="menu-items">
                                <NavLink to="/deanery/students">
                                    Студенты
                                </NavLink>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="menu-items">
                                <NavLink to="/attendance">Посещаемость</NavLink>
                            </div>
                        </>
                    )}
                    <div className="menu-items">
                        <NavLink to="/auth">Выйти</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};
