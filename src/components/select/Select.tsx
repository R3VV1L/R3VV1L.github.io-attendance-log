import './Select.css';
import React, { useState } from 'react';

interface SelectProps {
    options: string[];
}

export const Select: React.FC<SelectProps> = ({ options }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setSelectedOption(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLSelectElement>) => {
        if (event.key === 'Enter') {
            event.currentTarget.blur(); // Убираем курсор с селекта
            // Действия, которые нужно выполнить при нажатии клавиши "Enter"
        }
    };

    return (
        <select
            className="tamplate-select"
            value={selectedOption}
            onChange={handleOptionChange}
            onKeyPress={handleKeyPress}
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};
