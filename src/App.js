import React from 'react';
import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';
import Header from './Header.js';
import data from "./data.json"
import * as constants from './constants.js';
import SearchBar from './SearchBar.js';
import { useState } from 'react';

const HeadingComponent = () => (
            <div id="title" className='=title-class'>
            <h2>{constants.title}</h2>
            </div>
);

const CardContainer = ({filteredRestuarants}) =>{
    const cards = filteredRestuarants.map((restuarant) =>{
        return <CardComponent restuarant={restuarant} key ={restuarant.id} className="card" />
    });
    return cards;
};
// const  props ={
// restuarant = data[0];  it's like this interally
// }
const BodyComponent = () => {
    const [filteredRestuarants, setFilteredRestuarants] = useState(data);
  return (
    <div className="card-container">
      <SearchBar setFilteredRestuarants={setFilteredRestuarants}/>
      <CardContainer filteredRestuarants={filteredRestuarants}/>
    </div>
  );
};

const AppLayout = () => (
    <>
    <HeadingComponent />
    <BodyComponent />
    </>
)
console.log(<HeadingComponent/>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);