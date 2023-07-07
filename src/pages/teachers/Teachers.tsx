// @ts-ignore
import React from "react";
import { Search } from "../../components/search/Search.tsx";
import { Table } from "../../components/tables/Table.tsx";
import { Header } from "../../components/header/Header.tsx";
import "./teachers.css";

export const Teachers = () => {
  return (
    <div>
      <Header />
      <div className="search">
        <Search />
      </div>
      {/* <div className="prep-text">
        <p>Преподаватели</p>
      </div> */}
      <Table />
    </div> 
  );
};