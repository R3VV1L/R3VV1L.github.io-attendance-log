import "./Search.css";
import { Magnifier } from "../../assets/magnifier/Magnifier.tsx";
import { useState } from "react";

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="box">
      <div className="box-frame-wrapper">
        <div className="box-frame">
          <div className="box-div">
            <input
              className="box-text-wrapper"
              type="search"
              placeholder="Поиск..."
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="box-magnifier" onClick={handleSearch}>
              <Magnifier />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
