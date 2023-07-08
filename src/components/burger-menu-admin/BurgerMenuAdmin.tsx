import React, { useState } from 'react';
import './BurgerMenuAdmin.css';
import { NavLink } from 'react-router-dom';

export const BurgerMenuAdmin: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

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
                    <div className="menu-items">
                        <NavLink to="/attendance/groups">Группы</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/attendance/subgroups">Подгруппы</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/attendance/teachers">
                            Преподаватели
                        </NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/attendance/students">Студенты</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/auth">Выйти</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};
