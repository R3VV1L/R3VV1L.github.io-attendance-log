import React from "react";
import "./Button.css";

interface ButtonProps {
  title: string;
  size: "page-fill" | "page-empty" | "modal";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, size, onClick }) => {
  return (
    <button onClick={onClick} className={`button-${size}`}>
      {title}
    </button>
  );
};
