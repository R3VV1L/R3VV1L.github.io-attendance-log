import { Table } from '../../components/tables/Table.tsx';
import './Teachers.css';
import { ModalGroup } from '../../components/modal-group/ModalGroup.tsx';
import { ButtonTable } from '../../components/tables/button-table/ButtonTable.tsx';

export const Teachers = () => {
    return (
        <div>
            <div className="teachers-title">
                <p>Преподаватели</p>
            </div>
            <ModalGroup />
            <Table />
            <ButtonTable />
        </div>
    );
};
