// @ts-ignore
import React, { useContext, useEffect, useState } from "react";
import "./Table.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { setTableLength } from "../../API/action.tsx";
import { Search } from "../search/Search.tsx";

interface Teacher {
  name: string;
  position: string;
  department: string;
  email: string;
  login: string;
  password: string;
}

export const Table = () => {
  // @ts-ignore
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      name: "Иванов Иван Иванович",
      position: "Преподаватель",
      department: "Математики",
      email: "ivanov@university.edu",
      login: "ivanov_ii",
      password: "ivanov123",
    },
    {
      name: "Петров Петр Петрович",
      position: "Ассистент",
      department: "Физики",
      email: "petrov@university.edu",
      login: "petrov_pp",
      password: "petrov456",
    },
    {
      name: "Сидорова Анна Ивановна",
      position: "Старший преподаватель",
      department: "Информатики",
      email: "sidorova@university.edu",
      login: "sidorova_ai",
      password: "sidorova789",
    },
    {
      name: "Иванов Иван Иванович",
      position: "Преподаватель",
      department: "Математики",
      email: "ivanov@university.edu",
      login: "ivanov_ii",
      password: "ivanov123",
    },
    {
      name: "Петров Петр Петрович",
      position: "Ассистент",
      department: "Физики",
      email: "petrov@university.edu",
      login: "petrov_pp",
      password: "petrov456",
    },
    {
      name: "Сидорова Анна Ивановна",
      position: "Старший преподаватель",
      department: "Информатики",
      email: "sidorova@university.edu",
      login: "sidorova_ai",
      password: "sidorova789",
    },
    {
      name: "Иванов Иван Иванович",
      position: "Преподаватель",
      department: "Математики",
      email: "ivanov@university.edu",
      login: "ivanov_ii",
      password: "ivanov123",
    },
    {
      name: "Петров Петр Петрович",
      position: "Ассистент",
      department: "Физики",
      email: "petrov@university.edu",
      login: "petrov_pp",
      password: "petrov456",
    },
    {
      name: "Сидорова Анна Ивановна",
      position: "Старший преподаватель",
      department: "Информатики",
      email: "sidorova@university.edu",
      login: "sidorova_ai",
      password: "sidorova789",
    },
    {
      name: "Иванов Иван Иванович",
      position: "Преподаватель",
      department: "Математики",
      email: "ivanov@university.edu",
      login: "ivanov_ii",
      password: "ivanov123",
    },
    {
      name: "Петров Петр Петрович",
      position: "Ассистент",
      department: "Физики",
      email: "petrov@university.edu",
      login: "petrov_pp",
      password: "petrov456",
    },
    {
      name: "Сидорова Анна Ивановна",
      position: "Старший преподаватель",
      department: "Информатики",
      email: "sidorova@university.edu",
      login: "sidorova_ai",
      password: "sidorova789",
    },
    {
      name: "Иванов Иван Иванович",
      position: "Преподаватель",
      department: "Математики",
      email: "ivanov@university.edu",
      login: "ivanov_ii",
      password: "ivanov123",
    },
    {
      name: "Петров Петр Петрович",
      position: "Ассистент",
      department: "Физики",
      email: "petrov@university.edu",
      login: "petrov_pp",
      password: "petrov456",
    },
    {
      name: "Сидорова Анна Ивановна",
      position: "Старший преподаватель",
      department: "Информатики",
      email: "sidorova@university.edu",
      login: "sidorova_ai",
      password: "sidorova789",
    },
  ]); // данные с бд, потом добавить фетч или аксиос

  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>(teachers); // вместо teachers будет другая константа с данными с бэка

  useSelector((state: RootState<any, any, any>) => state.teachers);
  const tableLength = filteredTeachers.length; // вычисление длины строк в таблице
  console.log(tableLength);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTableLength(tableLength));
  }, [dispatch, tableLength]);

  const handleSearch = (query: string) => {
    const filtered = teachers.filter((teacher) =>
      teacher.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };

  return (
    <div className="teacher-table">
      <Search onSearch={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Должность</th>
            <th>Кафедра</th>
            <th>Эл. адрес</th>
            <th>Логин</th>
            <th>Пароль</th>
          </tr>
        </thead>
        <tbody>
          {filteredTeachers.map((teacher, index) => (
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
