import Movies from "@pages/Movies";
function Content(){
    return(
        <div className="contents">
           <div className="movies"><h3 style={{color:"#b39e6b"}}>Movies:</h3>
           <Movies result={1}/>
           </div>
           <h4 style={{fontSize:"20px",padding:'20px 0 10px 0',color:"#b39e6b"}}>Top Rated:</h4>
           <div className="top">
            <Movies/>
           </div>
            <h4 style={{fontSize:"20px",padding:'20px 0 10px 0',color:"#b39e6b"}}>UpComing:</h4>
           <div className="top">
            <Movies/>
           </div>
            <h4 style={{fontSize:"20px",padding:'20px 0 10px 0',color:"#b39e6b"}}>How to Book</h4>
            <div className="steps">
                <div className="steps1">
                    <h3>1. Choose a movie</h3>
                    <p>Pick the movie, theater, and show time.</p>
                </div>
                <div className="steps2">
                    <h3>2. Select your seats</h3>
                    <p>Taken seats are blocked, so no double booking.</p>
                </div>
                <div className="steps3">
                    <h3>3. Get your ticket</h3>
                    <p>Pay, then see your ticket and booking ID.</p>
                </div>
            </div>
            <div className="offer">
                <h3>Book 4 tickets, get 10% off</h3>
                <p>This Offer for Limited Time Only.</p>
            </div>
        </div>
    );
}
export default Content;