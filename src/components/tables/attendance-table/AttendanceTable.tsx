import { useEffect, useState } from 'react';
import './AttendanceTable.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';
import { setTableLength } from '../../../API/table/action.tsx';
import { ButtonTable } from '../button-table/ButtonTable.tsx';

interface TableProps {
    data: any;
    user: 'attendance';
}

export const AttendanceTable = ({ data, user }: TableProps) => {
    // @ts-ignore
    const [tableData, setTableData] = useState(data);
    console.log(user);

    /////////////////////////// функции для отображения записей в кнопочках
    // @ts-ignore
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

    useSelector((state: RootState<any, any, any>) => state.attendance);
    const tableLength = filteredData.length;
    console.log(tableLength);

    const dispatch = useDispatch();

    useEffect(() => {
        const sorted = [...tableData].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setTableData(sorted);
        dispatch(setTableLength(filteredData.length));
    }, [dispatch]);

    return (
        <div className="wrapper-attendance-table">
            <table className="component-attendance-table">
                <thead>
                    <tr className="attendance-table-trh">
                        {user === 'attendance' ? (
                            <>
                                <th className="attendance-table-th">№</th>
                                <th className="attendance-table-th">
                                    ФИО студента
                                </th>
                                <th className="attendance-table-th">01.03</th>
                                <th className="attendance-table-th">02.03</th>
                                <th className="attendance-table-th">03.03</th>
                                <th className="attendance-table-th">04.03</th>
                                <th className="attendance-table-th">05.03</th>
                                <th className="attendance-table-th">06.03</th>
                                <th className="attendance-table-th">07.03</th>
                                <th className="attendance-table-th">08.03</th>
                                <th className="attendance-table-th">09.03</th>
                                <th className="attendance-table-th">10.03</th>
                                <th className="attendance-table-th">11.03</th>
                                <th className="attendance-table-th">12.03</th>
                                <th className="attendance-table-th">13.03</th>
                                <th className="attendance-table-th">14.03</th>
                                <th className="attendance-table-th">15.03</th>
                                <th className="attendance-table-th">16.03</th>
                                <th className="attendance-table-th">17.03</th>
                                <th className="attendance-table-th">18.03</th>
                                <th className="attendance-table-th">19.03</th>
                                <th className="attendance-table-th">20.03</th>
                                <th className="attendance-table-th">21.03</th>
                                <th className="attendance-table-th">22.03</th>
                                <th className="attendance-table-th">23.03</th>
                                <th className="attendance-table-th">24.03</th>
                                <th className="attendance-table-th">25.03</th>
                                <th className="attendance-table-th">26.03</th>
                                <th className="attendance-table-th">27.03</th>
                                <th className="attendance-table-th">28.03</th>
                                <th className="attendance-table-th">29.03</th>
                                <th className="attendance-table-th">30.03</th>
                                <th className="attendance-table-th">31.03</th>
                            </>
                        ) : null}
                    </tr>
                </thead>
                {user === 'attendance' ? (
                    <tbody>
                        {getPaginatedData().map(
                            (attendance: any, index: number) => (
                                <tr
                                    className="attendance-table-trb"
                                    key={index}
                                >
                                    <td className="attendance-table-td">
                                        {index + 1}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.name}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day1}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day2}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day3}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day4}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day5}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day6}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day7}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day8}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day9}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day10}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day11}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day12}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day13}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day14}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day15}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day16}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day17}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day18}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day19}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day20}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day21}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day22}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day23}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day24}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day25}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day26}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day27}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day28}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day29}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day30}
                                    </td>
                                    <td className="attendance-table-td">
                                        {attendance.day31}
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
