import './Input.css';
import React from 'react';

interface InputProps {
    placeholder: string;
    type: string;
    name: string;
    required: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
    placeholder,
    type,
    name,
    required,
    value,
    onChange,
    onKeyPress,
}) => {
    // @ts-ignore
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Действия, которые нужно выполнить при нажатии клавиши "Enter"
            event.currentTarget.blur(); // Убираем курсор с инпута
        }
    };

    // const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    //     if (!event.target.value) {
    //         if (event.target.name === 'auth-email') {
    //             event.target.placeholder = 'Введите логин';
    //         } else if (event.target.name === 'auth-pass') {
    //             event.target.placeholder = 'Введите пароль';
    //         }
    //     }
    // };

    // const handleInputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    //     if (!event.target.value) {
    //         event.target.placeholder = '';
    //     }
    // };

    return (
        <input
            className="tamplate-input"
            type={type}
            placeholder={placeholder}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    );
};
