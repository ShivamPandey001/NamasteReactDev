const CardComponent = (props) => {
    const restuarant = props.restuarant;
    const {img, name, company,place} = props.restuarant;
    // or this {img, name, cusine,star} can be passed directly to the () 
    return (
        <div id="card" className="card-info">
            <img src={img} className=""/>
            <h2> {name} </h2>
            <h3> {company} </h3>
            <h4>{place} star</h4>
        </div>
    );
};
export default CardComponent;