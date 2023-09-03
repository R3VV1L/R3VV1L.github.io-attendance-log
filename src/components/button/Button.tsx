import React from 'react';
import './Button.css';

interface ButtonProps {
    title: string;
    type?: 'auth' | 'add' | 'edit' | 'delete' | 'cancel';
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ title, type, onClick }) => {
    return (
        <button className={`Button Button--${type}`} onClick={onClick}>
            {title}
        </button>
    );
};
