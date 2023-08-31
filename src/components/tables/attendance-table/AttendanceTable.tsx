import './AttendanceTable.css';

interface TableProps {
    data: any;
    user: 'attendance';
}

export const AttendanceTable = ({ data, user }: TableProps) => {
    const sortedData = data.sort((a: any, b: any) =>
        a.name.localeCompare(b.name)
    );

    return (
        <div className="wrapper-attendance-table">
            <table className="component-attendance-table">
                <thead>
                    <tr>
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
                        {sortedData.map((attendance: any, index: number) => (
                            <tr className="attendance-table-trb" key={index}>
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
                        ))}
                    </tbody>
                ) : null}
            </table>
        </div>
    );
};
