import "./Header.css";
import { NavLink } from "react-router-dom";
import { BurgerMenuAdmin } from "../burger-menu-admin/BurgerMenuAdmin";

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
          <BurgerMenuAdmin />
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
