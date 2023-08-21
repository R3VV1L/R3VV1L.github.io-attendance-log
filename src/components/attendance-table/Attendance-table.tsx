import { useEffect, useState } from 'react';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setTableLength } from '../../API/action.tsx';
import { Search } from '../search/Search.tsx';

interface TableProps {
    data: any;
    user: 'teacher' | 'student' | 'group' | 'subgroup';
}

export const Table = ({ data, user }: TableProps) => {
    // @ts-ignore
    const [tableData, setTableData] = useState(data);
    console.log(user);
    const [filteredData, setFilteredData] = useState(data);

    useSelector((state: RootState<any, any, any>) => state.teachers);
    const tableLength = filteredData.length;
    console.log(tableLength);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setTableLength(tableLength));
    }, [dispatch, tableLength]);

    const handleSearch = (query: string) => {
        const filtered = tableData.filter((item: any) =>
            Object.values(item).some((value: any) =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            )
        );
        setFilteredData(filtered);
    };

    return (
        <div className="teacher-table">
            <Search onSearch={handleSearch} />
            <table>
                <thead>
                    <tr>
                        <th>Студент</th>
                        <th>21.03</th>
                        <th>22.03</th>
                        <th>23.03</th>
                        <th>24.03</th>
                        <th>25.03</th>
                        <th>26.03</th>
                        <th>27.03</th>
                        <th>28.03</th>
                        <th>29.03</th>
                        <th>30.03</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((teacher: any, index: number) => (
                        <tr key={index}>
                            <td>{teacher.name}</td>
                            <td>{teacher.position}</td>
                            <td>{teacher.department}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.login}</td>
                            <td>{teacher.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
