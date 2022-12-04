import React from 'react';
import ReactDOM from 'react-dom/client';

const title = "HungerHub";

const HeadingComponent = () => {
    return (
            <div id="title" className='=title-class'>
            <h2>{title}</h2>
            </div>
        );
};

const CardComponent = () => {
    return (
        <div id="card" className="card">

        </div>
    );

}
console.log(<HeadingComponent/>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);