// @ts-ignore
import React from "react";
import { Search } from "../../components/search/Search.tsx";
import "./PrepodovateliTabl.css";

export const PrepodovateliTabl = () => {
  return (
    <div>
      <div className="label">Преподаватели</div>
      <div className="srch">
        <Search />
      </div>
      {/*вот сюда таблицу*/}
    </div>
  );
};
