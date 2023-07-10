// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Groups.css';

export const Groups = () => {
    return (
        <div>
            <div className="groups-title">
                <p>Группы</p>
            </div>
            <ModalGroup />
            <Table />
            <ButtonTable />
        </div>
    );
};

