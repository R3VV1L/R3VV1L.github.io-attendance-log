import { NavLink } from 'react-router-dom';
import './NotFound.css';
import { ArrowForward } from '../../assets/arrows/ArrowForward';

export const NotFound = () => {
    return (
        <div className="err">
            <p className="err-text">404</p>
            <NavLink to={'/auth'} className="back-link">
                Перейти назад
                <ArrowForward />
            </NavLink>
        </div>
    );
};
