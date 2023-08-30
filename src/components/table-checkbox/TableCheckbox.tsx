import React, { useState } from 'react';
import './TableCheckbox.css';

interface CheckboxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    title?: string;
}

export const TableCheckbox = ({ checked, onChange, title }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        setIsChecked(isChecked);
        onChange(isChecked);
    };

    return (
        <input
            className="table-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            title={title}
        />
    );
};
