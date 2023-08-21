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
                        <NavLink to="/deanery/groups">Группы</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/deanery/subgroups">Подгруппы</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/deanery/teachers">Преподаватели</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/deanery/students">Студенты</NavLink>
                    </div>
                    <div className="menu-items">
                        <NavLink to="/auth">Выйти</NavLink>
                    </div>
                </div>
            )}
        </div>
    );
};
