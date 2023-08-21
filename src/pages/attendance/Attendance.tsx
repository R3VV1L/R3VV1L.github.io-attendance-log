// @ts-ignore
import React from 'react';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Attendance.css';

export const Attendance = () => {
    return (
        <div>
            <div className="students-title">
                <p>Посещаемость</p>
            </div>
            <Attendance-table />
            <ButtonTable />
        </div>
    );
};
