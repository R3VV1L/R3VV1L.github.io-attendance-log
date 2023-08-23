import { useEffect, useState } from 'react';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setTableLength } from '../../../API/table/action.tsx';
import { Search } from '../../search/Search.tsx';
import { ButtonTable } from '../button-table/ButtonTable.tsx';

interface TableProps {
    data: any;
    user: 'teacher' | 'student' | 'group' | 'subgroup';
}

export const Table = ({ data, user }: TableProps) => {
    // @ts-ignore
    const [tableData, setTableData] = useState(data);
    console.log(user);

    /////////////////////////// функции для отображения записей в кнопочках
    const [filteredData, setFilteredData] = useState(data);
    // @ts-ignore
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
            <Search onSearch={handleSearch} />
            <table className="component-table">
                <thead>
                    <tr>
                        {user === 'group' ? (
                            <>
                                <th className="table-th">№</th>
                                <th className="table-th">Наименование</th>
                                <th className="table-th">Профиль</th>
                                <th className="table-th">Эл. адрес</th>
                                <th className="table-th">Логин</th>
                                <th className="table-th">Пароль</th>
                            </>
                        ) : null}
                        {user === 'subgroup' ? (
                            <>
                                <th className="table-th">№</th>
                                <th className="table-th">Наименование</th>
                                <th className="table-th">Комментарий</th>
                            </>
                        ) : null}
                        {user === 'teacher' ? (
                            <>
                                <th className="table-th">№</th>
                                <th className="table-th">ФИО</th>
                                <th className="table-th">Должность</th>
                                <th className="table-th">Кафедра</th>
                                <th className="table-th">Эл. адрес</th>
                                <th className="table-th">Логин</th>
                                <th className="table-th">Пароль</th>
                            </>
                        ) : null}
                        {user === 'student' ? (
                            <>
                                <th className="table-th">№</th>
                                <th className="table-th">ФИО</th>
                                <th className="table-th">Кафедра</th>
                                <th className="table-th">Эл. адрес</th>
                                <th className="table-th">Логин</th>
                                <th className="table-th">Пароль</th>
                            </>
                        ) : null}
                    </tr>
                </thead>
                {user === 'group' ? (
                    <tbody>
                        {getPaginatedData().map((group: any, index: number) => (
                            <tr key={index}>
                                <td className="table-td">{index + 1}</td>
                                <td className="table-td">{group.name}</td>
                                <td className="table-td">{group.profile}</td>
                                <td className="table-td">{group.email}</td>
                                <td className="table-td">{group.login}</td>
                                <td className="table-td">{group.password}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : null}
                {user === 'subgroup' ? (
                    <tbody>
                        {getPaginatedData().map(
                            (subgroup: any, index: number) => (
                                <tr key={index}>
                                    <td className="table-td">{index + 1}</td>
                                    <td className="table-td">
                                        {subgroup.name}
                                    </td>
                                    <td className="table-td">
                                        {subgroup.comments}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                ) : null}
                {user === 'teacher' ? (
                    <tbody>
                        {getPaginatedData().map(
                            (teacher: any, index: number) => (
                                <tr key={index}>
                                    <td className="table-td">{index + 1}</td>
                                    <td className="table-td">{teacher.name}</td>
                                    <td className="table-td">
                                        {teacher.position}
                                    </td>
                                    <td className="table-td">
                                        {teacher.department}
                                    </td>
                                    <td className="table-td">
                                        {teacher.email}
                                    </td>
                                    <td className="table-td">
                                        {teacher.login}
                                    </td>
                                    <td className="table-td">
                                        {teacher.password}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                ) : null}
                {user === 'student' ? (
                    <tbody>
                        {getPaginatedData().map(
                            (student: any, index: number) => (
                                <tr key={index}>
                                    <td className="table-td">{index + 1}</td>
                                    <td className="table-td">{student.name}</td>
                                    <td className="table-td">
                                        {student.department}
                                    </td>
                                    <td className="table-td">
                                        {student.email}
                                    </td>
                                    <td className="table-td">
                                        {student.login}
                                    </td>
                                    <td className="table-td">
                                        {student.password}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                ) : null}
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
