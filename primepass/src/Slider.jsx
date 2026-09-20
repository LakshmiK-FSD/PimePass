import { useEffect, useRef, useState } from "react"
import blast from "./assets/Blast.png"
import blastvalimai from "./assets/blastvalimai.png"
import janayagan from "./assets/jananayagan.png"  
import vadam from "./assets/vadam.png" 

function Slider(){
    const width =805;
    const [index,setIndex]=useState(0);
    const scrollRef=useRef(null);
    function goto(i){
        scrollRef.current.scrollTo({left:i*width,behavior:"smooth"})
        setIndex(i);
    }
    function nextMove(){
        const newIndex = (index+1) % movies.length;
        scrollRef.current.scrollTo({left:newIndex*width,behavior:"smooth"})
        setIndex(newIndex);
    }
    useEffect(()=>{
   const timer = setInterval(nextMove,3000)
    return ()=> clearInterval(timer);
},[index]);
    const movies = [
  { id: 1, img: blast},
  { id: 2, img: blastvalimai},
  { id: 3, img: blast},
  { id: 4, img: janayagan},
  { id: 5, img: vadam},
  { id: 6, img: blastvalimai},
  { id: 7, img: blast},
  { id: 8, img: janayagan },
  { id: 9, img: vadam}
];
const doter = movies.map((e,i)=>
    <span key={i}
    className={`dot ${index===i?"active":""}`}
    onClick={()=>goto(i)}
    >
    </span>
)
const slide = movies.map((element)=>(<div className="slide" key={element.id}>
    <img src={element.img} alt="" />
</div>));
    return(
        <div className="sliderDot">
        <div ref={scrollRef} className="slider">
        {slide}
        </div>  
         <div className="dotsSli">
           {doter}
        </div>
        </div>
    );
}
export default Slider;