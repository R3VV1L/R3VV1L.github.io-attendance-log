import "./Header.css";
// import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="box">
      <div className="rectangle-wrapper">
        <div className="rectangle" />
      </div>
    </div>
  );
};

// Экспериментальный навбар
// export const Header = () => {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <NavLink to="/attendance/students" className="link">Студенты</NavLink>
//           <NavLink to="/attendance/teachers" className="link">Преподаватели</NavLink>
//           <NavLink to="/attendance/groups" className="link">Группы</NavLink>
//           <NavLink to="/attendance/subgroups" className="link">Подгруппы</NavLink>
//           <NavLink to="/auth" className="link">Выйти</NavLink>
//         </ul>
//       </nav>
//     </header>
//   );
// };
