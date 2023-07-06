// @ts-ignore
import React from "react";
import { Search } from "../../components/search/Search.tsx";
import { Table } from "../../components/tables/Table.tsx";
import "./Teachers.css";

export const Teachers = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>
      <div className="h1">
        <h1>Преподаватели</h1>
      </div>
        <Table />
    </div>
  );
};