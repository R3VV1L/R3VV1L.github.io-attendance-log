import "./ButtonTable.css";
import { ArrowRight } from "../../../assets/arrows/ArrowRight.tsx";
import { ArrowLeft } from "../../../assets/arrows/ArrowLeft.tsx";
import { useSelector } from "react-redux";

export const ButtonTable = () => {
  // @ts-ignore
  const tableLength = useSelector((state) => state.tableLength);

  return (
    <div className="button-table">
      <div className="button-table-border"></div>
      <button
        onClick={() => {
          console.log("pipop");
        }}
      >
        <ArrowRight />
      </button>
      <button>
        <ArrowLeft />
      </button>
      <div className="text">{tableLength}</div>
    </div>
  );
};
