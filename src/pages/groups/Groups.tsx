// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Groups.css';

export const Groups = () => {
    const data = [
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
            group: '101',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
            group: '101',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
            group: '101',
        },
    ];

    return (
        <div>
            <div className="groups-title">
                <p>Группы</p>
            </div>
            <ModalGroup />
            <Table data={data} user="group" />
            <ButtonTable />
        </div>
    );
};
