import './NavbarMenu.css';
import { NavLink } from 'react-router-dom';

export const NavbarMenu: React.FC = () => {
    return (
        <>
            <div className="wrapper-navbar-link">
                <NavLink to="/deanery/groups" className="navbar-link">
                    Группы
                </NavLink>
            </div>
            <div className="wrapper-navbar-link">
                <NavLink to="/deanery/subgroups" className="navbar-link">
                    Подгруппы
                </NavLink>
            </div>
            <div className="wrapper-navbar-link">
                <NavLink to="/deanery/teachers" className="navbar-link">
                    Преподаватели
                </NavLink>
            </div>
            <div className="wrapper-navbar-link">
                <NavLink to="/deanery/students" className="navbar-link">
                    Студенты
                </NavLink>
            </div>
            <div className="wrapper-navbar-link">
                <NavLink to="/auth" className="navbar-link">
                    Выйти
                </NavLink>
            </div>
        </>
    );
};
