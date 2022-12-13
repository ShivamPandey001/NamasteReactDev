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

const CardContainer = ({filteredTeamMembers}) =>{
    const cards = filteredTeamMembers.map((restuarant) =>{
        return <CardComponent restuarant={restuarant} key ={restuarant.id} className="card" />
    });
    return cards;
};

const BodyComponent = () => {
    const [filteredTeamMembers, setFilteredTeams] = useState(data);
  return (
    <div className="card-container">
      <SearchBar setFilteredTeams={setFilteredTeams}/>
      <CardContainer filteredTeamMembers={filteredTeamMembers}/>
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