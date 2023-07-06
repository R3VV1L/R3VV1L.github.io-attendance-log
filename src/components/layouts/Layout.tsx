import { BurgerMenuAdmin } from "../burger-menu-admin/burger-menu-admin.tsx";
import { Header } from "../header/header.tsx";
import "./Layout.css";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* <div className="brgMenu">
        <BurgerMenuAdmin />
      </div> */}
      <Header />
      <Outlet />
    </>
  );
};
