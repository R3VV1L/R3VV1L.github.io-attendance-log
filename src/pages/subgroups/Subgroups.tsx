// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/table/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Subgroups.css';

export const Subgroups = () => {
    const data = [
        {
            name: '20-ПИ-1',
            comments:
                'Положение о структурном подразделении: Положение о кафедре УТТР Приказ №74 от 03.02.2023',
        },
        {
            name: '20-ПИ-2',
            comments: 'Нет',
        },
        {
            name: '20-ПИ-3',
            comments: 'Нет',
        },
        {
            name: '20-ПИ-4',
            comments:
                'Положение о структурном подразделении: Положение о кафедре ИТиМ',
        },
        {
            name: '20-ПИ-5',
            comments: 'Да',
        },
        {
            name: '20-ПИ-6',
            comments: 'Нет',
        },
        {
            name: '20-ПИ-7',
            comments:
                'Положение о структурном подразделении: Положение о кафедре АДиЭ (Приказ №74 от 03.02.2023)',
        },
        {
            name: '20-ПИ-8',
            comments:
                'Положение о структурном подразделении: Положение о кафедре ИТЭиУ (Приказ №74 от 03.02.2023)',
        },
        {
            name: '20-ПИ-9',
            comments: '3 студента',
        },
        {
            name: '20-ПИ-10',
            comments: 'В группе нет студентов',
        },
    ];
    return (
        <div>
            <div className="subgroups-title">
                <p>Подгруппы</p>
            </div>
            <ModalGroup />
            <Table data={data} user="subgroup" />
            <ButtonTable />
        </div>
    );
};
