import React from 'react';
import ReactDOM from 'react-dom/client';

const t = "Hunger Hub";

const HeadingComponent = () => {
            <div id="title" className='=title-class'>
            <h2>Hunger Hub</h2>
            </div>
};
const data = [
{
    img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uj68ybtfwbydewraxzhm",
    name : "GayLord Express",
    cusine: "Agra , India",
    star : 4
},
{
    img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/uj68ybtfwbydewraxzhm",
    name : "Day Dreams Cafe and Juicebar",
    cusine: "Beverages, Fast Food, Italian, Ice Cream",
    star : 4
},
{
    img : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wcd8jyciflmzxm3yooei",
    name : "Biryani station",
    cusine: "Indian, Biryani, North Indian, Punjabi",
    star : 3
}
];
const CardComponent = (props) => {
    return (
        <div id="card" className="card">
            <img src="props.restuarant.img"></img>
            <h2> {props.restuarant.name} </h2>
            <h3> {props.restuarant.cusine} </h3>
            <h4>{props.restuarant.star} star</h4>
        </div>
    );
}
// const  props ={
// restuarant = data[0];  it's like this interally
// }
const BodyComponent = () => (
<div className='card-container'>
    <CardComponent restuarant ={data[0]}/>
    <CardComponent />
    <CardComponent />
    <CardComponent />
    <CardComponent />
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