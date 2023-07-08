import './Header.css';
import { BurgerMenuAdmin } from '../burger-menu-admin/BurgerMenuAdmin';

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-menu">
                    <BurgerMenuAdmin />
                </div>
                <div className="navbar-profile">
                    <p className="navbar-profile-name">
                        Копырин Андрей Сергеевич
                    </p>
                    <p className="navbar-profile-mail">copyrin777@sgu.ru</p>
                </div>
            </nav>
        </header>
    );
};
