import { TableCheckbox } from '../table-checkbox/TableCheckbox';

interface TableHeaderProps {
    user: 'teacher' | 'student' | 'group' | 'subgroup';
}

export const TableHeader = ({ user }: TableHeaderProps) => {
    return (
        <tr className="table-trh">
            {user === 'group' ? (
                <>
                    <th className="table-th table-checkbox-cell">
                        <TableCheckbox
                            label={''}
                            title={'Выбрать всё'}
                            checked={false}
                            onChange={function (_checked: boolean): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </th>
                    <th className="table-th">Наименование</th>
                    <th className="table-th">Профиль</th>
                    <th className="table-th">Эл. адрес</th>
                    <th className="table-th">Логин</th>
                    <th className="table-th">Пароль</th>
                </>
            ) : null}
            {user === 'subgroup' ? (
                <>
                    <th className="table-th table-checkbox-cell">
                        <TableCheckbox
                            label={''}
                            title={'Выбрать всё'}
                            checked={false}
                            onChange={function (_checked: boolean): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </th>
                    <th className="table-th">Наименование</th>
                    <th className="table-th">Комментарий</th>
                </>
            ) : null}
            {user === 'teacher' ? (
                <>
                    <th className="table-th table-checkbox-cell">
                        <TableCheckbox
                            label={''}
                            title={'Выбрать всё'}
                            checked={false}
                            onChange={function (_checked: boolean): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </th>
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
                    <th className="table-th table-checkbox-cell">
                        <TableCheckbox
                            label={''}
                            title={'Выбрать всё'}
                            checked={false}
                            onChange={function (_checked: boolean): void {
                                throw new Error('Function not implemented.');
                            }}
                        />
                    </th>
                    <th className="table-th">ФИО</th>
                    <th className="table-th">Кафедра</th>
                    <th className="table-th">Эл. адрес</th>
                    <th className="table-th">Логин</th>
                    <th className="table-th">Пароль</th>
                </>
            ) : null}
        </tr>
    );
};
