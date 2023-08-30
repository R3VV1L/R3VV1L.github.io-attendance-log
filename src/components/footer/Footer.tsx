import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-wrapper-link">
                    <a
                        className="footer-link"
                        href="https://sutr.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Сайт СГУ
                    </a>
                    <a
                        className="footer-link"
                        href="http://timetable.sutr.ru/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Расписание занятий
                    </a>
                </div>
                <a className="footer-copyright" title="Все права защищены">
                    &copy; Сочинский государственный университет, 2023
                </a>
            </div>
        </footer>
    );
};
