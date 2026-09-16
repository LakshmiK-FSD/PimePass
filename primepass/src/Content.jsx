import Movies from "./Movies";

function Content(){
    return(
        <div className="contents">
           <div className="movies"><h3>Movies:</h3>
           <Movies/>
           </div>
           <div><h3>Concerts:</h3>
           <Movies/>
           </div>
            <div><h3>Hotels:</h3>
            <Movies/>
            </div>
            <div><h3>Functions:</h3>
            <Movies/>
            </div>
           <div><h3>More Events:</h3>
           <Movies/>
           </div>
        </div>
    );
}
export default Content;