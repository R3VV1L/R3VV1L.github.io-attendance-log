import "./Search.css";
import { Magnifier } from "../../assets/magnifier/Magnifier.tsx";

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
    <form className="search-box">
        <input
          className="search-box-text"
          type="search"
          placeholder="Поиск..."
          required
        />
        <button
          className="search-bottom"
          onClick={() => console.log("click-click")}
        >
          <Magnifier />
        </button>


      {/*<ul>*/}
      {/*  {searchResults.map((result) => (*/}
      {/*    <li key={result.id}>{result.title}</li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </form>
  );
};
