import './Table.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setTableLength } from '../../../API/table/action.tsx';
import { Search } from '../../search/Search.tsx';
import { ButtonTable } from '../button-table/ButtonTable.tsx';
import { TableCheckbox } from './table-checkbox/TableCheckbox.tsx';
import { TableHeader } from './table-header/TableHeader.tsx';
import { TableBody } from './table-body/TableBody.tsx';
import { ModalGroup } from '../../modal-group/ModalGroup.tsx';

interface TableProps {
    data: any;
    user: 'teacher' | 'student' | 'group' | 'subgroup';
}

export const Table = ({ data, user }: TableProps) => {
    const [tableData] = useState(data);
    console.log(user);

    /////////////////////////// функции для отображения записей в кнопочках
    const [filteredData, setFilteredData] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 15;

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * recordsPerPage;
        const endIndex = startIndex + recordsPerPage;
        return filteredData.slice(startIndex, endIndex);
    };
    ///////////////////////////

    useSelector((state: RootState<any, any, any>) => state.teachers);
    const tableLength = filteredData.length;
    console.log(tableLength);

    const dispatch = useDispatch();

    useEffect(() => {
        const sorted = [...filteredData].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setFilteredData(sorted);
        dispatch(setTableLength(sorted.length));
    }, [dispatch]);

    const handleSearch = (query: string) => {
        const filtered = tableData.filter((item: any) =>
            Object.values(item).some((value: any) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    return (
        <div className="wrapper-table">
            <div className="table-controls">
                <Search onSearch={handleSearch} />
                <ModalGroup />
            </div>
            <table className="component-table">
                <thead>
                    <TableHeader user={user} />
                </thead>
                <TableBody data={getPaginatedData()} user={user} />
            </table>
            <ButtonTable
                currentPage={currentPage}
                recordsPerPage={recordsPerPage}
                filteredData={filteredData}
                setCurrentPage={setCurrentPage}
                getPaginatedData={getPaginatedData}
            />
        </div>
    );
};
