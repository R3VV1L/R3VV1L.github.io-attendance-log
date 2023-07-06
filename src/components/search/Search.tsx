import "./search.css";
import { Magnifier } from "../../assets/magnifier/magnifier.tsx";

export const Search = () => {
  // const [searchResults, setSearchResults] = useState([]);
  //
  // const handleSearch = (event) => {
  //   const query = event.target.value;
  //   fetch(`https://api.example.com/search?q=${query}`)
  //     .then((response) => response.json())
  //     .then((data) => setSearchResults(data.results))
  //     .catch((error) => console.error(error));
  // };

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
            />
            <button
              className="box-magnifier"
              onClick={() => console.log("click-click")}
            >
              <Magnifier />
            </button>
          </div>
        </div>
      </div>
      {/*<ul>*/}
      {/*  {searchResults.map((result) => (*/}
      {/*    <li key={result.id}>{result.title}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};
