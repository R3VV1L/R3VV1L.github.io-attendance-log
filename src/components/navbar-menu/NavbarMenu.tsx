import React, { useState } from "react";
import "./navbar-menu.css";
import { NavLink } from "react-router-dom";

export const NavbarMenu: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="navbar-menu">
        <button
          className={`navbar-menu-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className=""></span>
          <span className="bar"></span>
        </button>
  
        {isOpen && (
          <div className="navbar-menu-link">
            <NavLink to="/groups" className="link">Группы</NavLink>
            <NavLink to="/subgroups" className="link">Подгруппы</NavLink>
            <NavLink to="/students" className="link">Студенты</NavLink>
            <NavLink to="/teachers" className="link">Преподаватели</NavLink>
            <NavLink to="/auth" className="link">Выйти</NavLink>
          </div>
        )}
      </div>
    );
  };