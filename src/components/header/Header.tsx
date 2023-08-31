import './Header.css';
import { NavbarMenu } from '../navbar-menu/NavbarMenu';

export const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-menu">
                    <NavbarMenu />
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
