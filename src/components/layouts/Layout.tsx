import { BurgerMenuAdmin } from "../BurgerMenuAdmin/BurgerMenuAdmin.tsx";
import { Header } from "../header/Header.tsx";
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
