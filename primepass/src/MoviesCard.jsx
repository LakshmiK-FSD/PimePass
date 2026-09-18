function MoviesCard(props){
    return(  <div key={props.id} className="card">
        <img src={props.img} alt="" loading="lazy" />
        <div className="cardText">
        <h5>{props.movename}</h5>
        <p>{props.description}</p></div>
    </div>)
}
export default MoviesCard