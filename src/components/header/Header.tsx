import "./header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-logotype">
          <NavLink to="/" className="navbar-logotype-text">
            СГУ
          </NavLink>
        </div>
        <div className="navbar-link">
          <NavLink to="/groups" className="link">Группы</NavLink>
          <NavLink to="/subgroups" className="link">Подгруппы</NavLink>
          <NavLink to="/students" className="link">Студенты</NavLink>
          <NavLink to="/teachers" className="link">Преподаватели</NavLink>
          <NavLink to="/auth" className="link">Выйти</NavLink>
        </div>
        <div className="navbar-profile">
          <NavLink to="/" className="navbar-profile-text">
            Копырин Андрей Сергеевич
          </NavLink>
        </div>
      </nav>
    </header>
  );
};