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
                        {user === 'teacher' ? (
                            <>
                                <th>ФИО</th>
                                <th>Должность</th>
                                <th>Кафедра</th>
                                <th>Эл. адрес</th>
                                <th>Логин</th>
                                <th>Пароль</th>
                            </>
                        ) : null}
                        {user === 'student' ? (
                            <>
                                <th>ФИО</th>
                                <th>Кафедра</th>
                                <th>Эл. адрес</th>
                                <th>Логин</th>
                                <th>Пароль</th>
                            </>
                        ) : null}
                        {user === 'group' ? (
                            <>
                                <th>Кафедра</th>
                                <th>Эл. адрес</th>
                                <th>Логин</th>
                                <th>Пароль</th>
                                <th>Группа</th>
                            </>
                        ) : null}
                        {user === 'subgroup' ? (
                            <>
                                <th>Кафедра</th>
                                <th>Группа</th>
                            </>
                        ) : null}
                    </tr>
                </thead>
                {user === 'teacher' ? (
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
                ) : null}
                {user === 'student' ? (
                    <tbody>
                        {filteredData.map((student: any, index: number) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.department}</td>
                                <td>{student.email}</td>
                                <td>{student.login}</td>
                                <td>{student.password}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : null}
                {user === 'group' ? (
                    <tbody>
                        {filteredData.map((group: any, index: number) => (
                            <tr key={index}>
                                <td>{group.department}</td>
                                <td>{group.email}</td>
                                <td>{group.login}</td>
                                <td>{group.password}</td>
                                <td>{group.group}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : null}
                {user === 'subgroup' ? (
                    <tbody>
                        {filteredData.map((subgroup: any, index: number) => (
                            <tr key={index}>
                                <td>{subgroup.department}</td>
                                <td>{subgroup.group}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : null}
            </table>
        </div>
    );
};
