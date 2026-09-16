import blast from "./assets/Blast.png"
import blastvalimai from "./assets/blastvalimai.png"
import Eleven from "./assets/Eleven.png" 
import janayagan from "./assets/jananayagan.png"  
import vadam from "./assets/vadam.png"  
function Slider(){
    const movies = [
  { id: 1, img: blast},
  { id: 2, img: blastvalimai},
  { id: 3, img: Eleven},
  { id: 4, img: janayagan},
  { id: 5, img: vadam},
  { id: 6, img: blastvalimai},
  { id: 7, img: Eleven},
  { id: 8, img: janayagan },
  { id: 9, img: vadam}
];
const slide = movies.map((element)=>(<div className="slide" key={element.id}>
    <img src={element.img} alt="" />
</div>));
    return(
        <div className="slider">
        {slide}
        </div>
    );
}
export default Slider;