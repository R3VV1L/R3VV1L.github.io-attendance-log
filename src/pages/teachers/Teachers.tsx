import { Table } from '../../components/tables/table/Table.tsx';
import './Teachers.css';

export const Teachers = () => {
    const data = [
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
        {
            name: 'Иванов Иван Иванович',
            position: 'Преподаватель',
            department: 'Математики',
            email: 'ivanov@university.edu',
            login: 'ivanov_ii',
            password: 'ivanov123',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
        {
            name: 'Петров Петр Петрович',
            position: 'Ассистент',
            department: 'Физики',
            email: 'petrov@university.edu',
            login: 'petrov_pp',
            password: 'petrov456',
        },
        {
            name: 'Сидорова Анна Ивановна',
            position: 'Старший преподаватель',
            department: 'Информатики',
            email: 'sidorova@university.edu',
            login: 'sidorova_ai',
            password: 'sidorova789',
        },
    ]; // данные с бд, потом добавить фетч или аксиос

    return (
        <div>
            <div className="teachers-title">
                <p>Преподаватели</p>
            </div>
            <Table data={data} user="teacher" />
        </div>
    );
};
