import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <NavLink to={"/"}>перейти к авторизации</NavLink>
      <h1>404</h1>
      <h2>404</h2>
      <h3>404</h3>
    </div>
  );
};
