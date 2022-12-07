const CardComponent = (props) => {
    const team = props.team;
    const {name, company,place} = props.team;
    // or this {img, name, cusine,star} can be passed directly to the () 
    return (
        <div id="card" className="card-info">
            <h2> {name} </h2>
            <h3> {company} </h3>
            <h4>{place} star</h4>
        </div>
    );
};
export default CardComponent;