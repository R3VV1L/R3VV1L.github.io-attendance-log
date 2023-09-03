import { TableCheckbox } from '../table-checkbox/TableCheckbox';
import './TableBody.css';

interface TableBodyProps {
    data: any[];
    user: 'teacher' | 'student' | 'group' | 'subgroup';
}

export const TableBody = ({ data, user }: TableBodyProps) => {
    const renderRow = (rowData: any, index: number) => {
        switch (user) {
            case 'group':
                return (
                    <tr className="table-trb" key={index}>
                        <td className="table-td table-checkbox-cell">
                            <TableCheckbox
                                label={''}
                                title={'Выбрать'}
                                checked={false}
                                onChange={function (_checked: boolean): void {
                                    throw new Error(
                                        'Function not implemented.'
                                    );
                                }}
                            />
                        </td>
                        <td className="table-td">{rowData.name}</td>
                        <td className="table-td">{rowData.profile}</td>
                        <td className="table-td">{rowData.email}</td>
                        <td className="table-td">{rowData.login}</td>
                        <td className="table-td">{rowData.password}</td>
                    </tr>
                );
            case 'subgroup':
                return (
                    <tr className="table-trb" key={index}>
                        <td className="table-td table-checkbox-cell">
                            <TableCheckbox
                                label={''}
                                title={'Выбрать'}
                                checked={false}
                                onChange={function (_checked: boolean): void {
                                    throw new Error(
                                        'Function not implemented.'
                                    );
                                }}
                            />
                        </td>
                        <td className="table-td">{rowData.name}</td>
                        <td className="table-td">{rowData.comments}</td>
                    </tr>
                );
            case 'teacher':
                return (
                    <tr className="table-trb" key={index}>
                        <td className="table-td table-checkbox-cell">
                            <TableCheckbox
                                label={''}
                                title={'Выбрать'}
                                checked={false}
                                onChange={function (_checked: boolean): void {
                                    throw new Error(
                                        'Function not implemented.'
                                    );
                                }}
                            />
                        </td>
                        <td className="table-td">{rowData.name}</td>
                        <td className="table-td">{rowData.position}</td>
                        <td className="table-td">{rowData.department}</td>
                        <td className="table-td">{rowData.email}</td>
                        <td className="table-td">{rowData.login}</td>
                        <td className="table-td">{rowData.password}</td>
                    </tr>
                );
            case 'student':
                return (
                    <tr className="table-trb" key={index}>
                        <td className="table-td table-checkbox-cell">
                            <TableCheckbox
                                label={''}
                                title={'Выбрать'}
                                checked={false}
                                onChange={function (_checked: boolean): void {
                                    throw new Error(
                                        'Function not implemented.'
                                    );
                                }}
                            />
                        </td>
                        <td className="table-td">{rowData.name}</td>
                        <td className="table-td">{rowData.department}</td>
                        <td className="table-td">{rowData.email}</td>
                        <td className="table-td">{rowData.login}</td>
                        <td className="table-td">{rowData.password}</td>
                    </tr>
                );
            default:
                return null;
        }
    };

    return (
        <tbody>
            {data.length > 0 ? (
                data.map(renderRow)
            ) : (
                <tr>
                    <td className="table-td no-data" colSpan={7}>
                        Записи не найдены
                    </td>
                </tr>
            )}
        </tbody>
    );
};
