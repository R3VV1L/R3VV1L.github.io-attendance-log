import React, { useState } from "react";
import "./burger-menu-admin.css";
import { NavLink } from "react-router-dom";

export const BurgerMenuAdmin: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <button
        className={`burger-button ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar burger-icon1"></span>
        <span className="bar burger-icon2"></span>
        <span className="bar burger-icon3"></span>
      </button>

      {isOpen && (
        <div className="block-menu">
          <div className="menu-items">
            <a href="#">Студенты</a>
          </div>
          <div className="menu-items">
            <NavLink to="/attendance/teachers">Преподаватели</NavLink>
          </div>
          <div className="menu-items">
            <a href="#">Группы</a>
          </div>
          <div className="menu-items">
            <a href="#">Подгруппы</a>
          </div>
          <div className="menu-items">
            <NavLink to="/auth">Выйти</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};
