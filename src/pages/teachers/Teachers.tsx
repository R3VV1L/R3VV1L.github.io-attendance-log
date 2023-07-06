// @ts-ignore
import React from "react";
import { Search } from "../../components/search/search.tsx";
import { Table } from "../../components/tables/table.tsx";
import { Header } from "../../components/header/header.tsx";
import "./teachers.css";

export const Teachers = () => {
  return (
    <div>
      <Header />
      {/* <div className="search">
        <Search />
      </div> */}
      <div className="prep-text">
        <p>Преподаватели</p>
      </div>
      <Table />
    </div>
  );
};