import React from 'react';
import ReactDOM from 'react-dom/client';
import CardComponent from './CardComponent.js';
import Header from './Header.js';

const t = "Hunger Hub";

const HeadingComponent = () => {
            <div id="title" className='=title-class'>
            <h2>Hunger Hub</h2>
            </div>
};
const data = [
    {
      name: "Harshita Mangla",
      company: "GJUST",
      place: "Faridabad",
      id: 1,
    },
    {
      name: "Sumathi",
      company: "Capgemini",
      place: "Guntur",
      id: 2,
    },
    {
      name: "Shivam Pandey",
      company: "Korber Supply Chain",
      place: "Mirzapur",
      id: 3,
    },
    {
      name: "Atul Singh",
      company: "Appinventiv Technologies",
      place: "Noida",
      id: 4,
    },
    {
      name: "Prajwali",
      company: "Zeta",
      place: "Belikahalli",
      id: 5,
    },
    {
      name: "Pranav",
      company: "ITC Infotech",
      place: "Bengaluru",
      id: 6,
    },
    {
      name: "Priya",
      company: "Manhattan Associates",
      place: "NA",
      id: 7,
    },
    {
      name: "Samridhi Pandey",
      company: "HPE",
      place: "Noida",
      id: 8,
    },
    {
      name: "Sowmya Reddy",
      company: "Landmark Health Pvt Ltd",
      place: "Kithaganur",
      id: 9,
    },
    {
      name: "Uttapal",
      company: "Ramjas College",
      place: "Vijaynagar",
      id: 10,
    },
];
  

const CardContainer = () =>{
    const cards = data.map((team) =>{
        return <CardComponent team={team} key ={team.id} className="card" />
    });
    return cards;
};
// const  props ={
// restuarant = data[0];  it's like this interally
// }
const BodyComponent = () => (
<div className='card-container'>
    <CardContainer />
</div>
);

const AppLayout = () => (
    <>
    <HeadingComponent />
    <BodyComponent />
    </>
)
console.log(<HeadingComponent/>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);