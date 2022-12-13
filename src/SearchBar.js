import { useState } from "react";
import data from "./data.json"

const searchRestuarant = (searchText) => {
    return data.filter((res)=>
    res.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
};

const SearchBar = ({setFilteredTeams}) => {
const [searchText, setSearchText] = useState("Teams");
  return (
    <div>
      <form 
        onSubmit={(e) => {
            e.preventDefault();
            const filteredRestuarant = searchRestuarant(searchText);
            console.log(filteredRestuarant);
            setFilteredTeams(filteredRestuarant);            
        }}
      >
        <input
          id="Teams"
          placeholder="Teams"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
