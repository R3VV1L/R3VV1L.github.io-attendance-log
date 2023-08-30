// import React, { useState } from 'react';
// import './NavbarMenu.css';
// import { NavLink } from 'react-router-dom';

// export const NavbarMenu: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="navbar-menu">
//             <button
//                 className={`navbar-menu-button ${isOpen ? 'open' : ''}`}
//                 onClick={toggleMenu}
//             >
//                 <span className=""></span>
//                 <span className="bar"></span>
//             </button>

//             {isOpen && (
//                 <div className="navbar-menu-link">
//                     <NavLink to="/deanery/groups" className="link">
//                         Группы
//                     </NavLink>
//                     <NavLink to="/deanery/subgroups" className="link">
//                         Подгруппы
//                     </NavLink>
//                     <NavLink to="/deanery/teachers" className="link">
//                         Студенты
//                     </NavLink>
//                     <NavLink to="/deanery/students" className="link">
//                         Преподаватели
//                     </NavLink>
//                     <NavLink to="/auth" className="link">
//                         Выйти
//                     </NavLink>
//                 </div>
//             )}
//         </div>
//     );
// };
