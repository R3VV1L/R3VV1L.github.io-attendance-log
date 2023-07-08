// @ts-ignore
import React from "react";
import { Search } from "../../components/search/Search.tsx";
import { Table } from "../../components/tables/Table.tsx";
import "./Teachers.css";
import { ModalGroup } from "../../components/modal-group/ModalGroup.tsx";

export const Teachers = () => {
  return (
    <div>
      <div className="prep-text">
        <p>Преподаватели</p>
      </div>
      <div className="search">
        <Search />
      </div>
      <ModalGroup />
      <Table />
    </div>
  );
};
