// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Students.css';

export const Students = () => {
    return (
        <div>
            <div className="students-title">
                <p>Студенты</p>
            </div>
            <ModalGroup />
            <Table />
            <ButtonTable />
        </div>
    );
};
