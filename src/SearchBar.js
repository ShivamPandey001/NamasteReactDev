import { useState } from "react";
import data from "./data.json"

const searchRestuarant = (searchText) => {
    return data.filter((res)=>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
};

const SearchBar = ({setFilteredRestuarants}) => {
const [searchText, setSearchText] = useState("restuarant");
  return (
    <div>
      <form 
        onSubmit={(e) => {
            e.preventDefault();
            const filteredRestuarant = searchRestuarant(searchText);
            console.log(filteredRestuarant);
            setFilteredRestuarants(filteredRestuarant);            
        }}
      >
        <input
          id="restuarant"
          placeholder="restuarant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        ></input>
        <button>Search</button>
        <h1>{searchText}</h1>
      </form>
    </div>
  );
};

export default SearchBar;
