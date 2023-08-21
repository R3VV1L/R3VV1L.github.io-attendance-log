// @ts-ignore
import React from 'react';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Attendance.css';
import { Header } from '../../components/header/Header.tsx';
import { Outlet } from 'react-router-dom';

export const Attendance = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <div className="students-title">
                <p>Посещаемость</p>
            </div>
            <ButtonTable />
        </div>
    );
};
