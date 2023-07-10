// @ts-ignore
import React from 'react';
import { ModalGroup } from '../../components/modal-group/ModalGroup';
import { Table } from '../../components/tables/Table';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable';
import './Subgroups.css';

export const Subgroups = () => {
    return (
        <div>
            <div className="subgroups-title">
                <p>Подгруппы</p>
            </div>
            <ModalGroup />
            <Table />
            <ButtonTable />
        </div>
    );
};
