// @ts-ignore
import React from "react";
import { NavLink } from "react-router-dom";
//import "./AuthorizationGuest.css";

export const AuthorizationGuest = () => {
  return (
    <div>
      AuthorizationGuest
      <br />
      <NavLink to="/attendance">Я студент</NavLink>
    </div>
  );
};
