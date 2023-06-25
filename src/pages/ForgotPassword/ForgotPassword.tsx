// @ts-ignore
import React from "react";
import "./ForgotPassword.css";
import { SguSvg } from "../../assets/SguSvg.tsx";

export const ForgotPassword = () => {
  
  return (
    <div className="forgot-block">
      <SguSvg />
      <p className="forgot-block-head-text">Восстановление пароля</p>
      <p className="forgot-block-info-text">Введите ваш e-mail и мы отправим на него инструкции по восстановлению пароля</p>
    </div>
  );
};