import { useLocation, useNavigate, useParams } from "react-router-dom";
import style from './Payment.module.css';
import { useEffect, useRef, useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import api from '@services/api';
import Timer from "../Timer";
function Payment(){
    const  {movid} = useParams();
    const navi = useNavigate();
    const locat = useLocation();
    const arr = locat?.state.arr;
    const theatdet = locat?.state.theatdet;
    const seats = locat?.state.stsIdArr;
    const[priSeats,setSeats]=useState([]);
    const loadRef = useRef();
    const lockRef = useRef();
    const[email,setSeats1]=useState();
    const[cvc,setSeats2]=useState();
    const[expire,setSeats3]=useState();
    const[nameCrd,setSeats4]=useState();
    const[priSeats5,setSeats5]=useState();
    const tax =20.02;
    const platFormFee =30.01;
    useEffect(()=>{
        async function geting(seaters) {
            try {
               
                if(seaters){
                const res = await api.get("/users/seats",{
                    params:{
                        seats:seaters
                    }
                });
                 console.log(res.data);
                setSeats(res.data);
                }

            } catch (error) {
                console.log(error);
            }
        }
        geting(seats);
    },[seats])


  async function booking() {
        if(localStorage.getItem("id")){
         try{
            const res = await api.put("/users/booking",{
                  seats:seats,
                  booker:[localStorage.getItem("id")]
            }
            )
            const str = res.data.value;
            console.log(res.status)
            
            if((res.status)!=202){
              return (<div>
                please login ...
              </div>)
            }
            if((res.status)===202){
                console.log("202")
              const userId = localStorage.getItem("id");
            navi(`/bookdetail/${movid}`,{state:{arr,theatdet,userId,seats}});
          }
           
         }
         catch(error){
          console.log(error);
         }
      }}
         const seatCheck=  priSeats.map((e)=>(new Date().getTime() < new Date(e.expireTime?.toString()
   .split('.')[0]+'.'+ e.expireTime?.toString().split('.')[1].slice(0,3)+'Z').getTime()-5.5*60*60*1000))
   .filter((e)=>e).length==0?true:false;
    const booker=  (priSeats.map((e)=>e.bookedBy))?.[0];
    function loader(){

        if(booker == null){
            
        }
    if(seatCheck || booker == localStorage.getItem("id")){
        loadRef.current.style.display ="block";
        setTimeout(()=>{booking()},3000)
    }
    if(!seatCheck || booker != localStorage.getItem("id")){
         lockRef.current.style.display ="block";   
    }
}

   
    return(

        <div className={style.main}><div className={style.first}>
           <Timer/>
            <div>
                <h5>Seats</h5> <div><p>{seats.length}</p></div>
            </div>
            <div>
                <h5>Prize</h5> <div><p>&#8377;{(priSeats.map((e)=>e.prize)).reduce((acc,cur)=>
                    acc+cur
                    ,0)}</p></div>
            </div>
            <div><h5>PlatFormFee</h5> <div><p>&#8377;{platFormFee}</p></div></div>
            <div><h5>Tax</h5> <div><p>&#8377;{tax}</p></div></div>
            <span></span>
            <div className={style.pay}><h5>Total</h5> <div><p>&#8377;{(priSeats.map((e)=>e.prize)).reduce((acc,cur)=>
                    acc+cur
                    ,0)+tax+platFormFee}</p></div></div>
        </div>
            <div className={style.griding}>
                <div className={style.head}>
                  <h6>Complete The Payment</h6>
                  <h4>Review your Booking details and enter your payment information to complete your Booking.</h4>
                </div>
             
                <div>
                     <p>Email Address</p><input type="text" placeholder=" abcd@example.com"/>
                </div>
                <div>
                     <p>Card Number</p><input type="text" placeholder="16 - digit number"/>
                </div>
                <div>
                     <p>Epiration date</p><input type="text" placeholder="MM/YY"/>
                </div>
                <div>
                     <p>CVC</p><input type="text" placeholder="123"/>
                </div>
                <div>
                        <p>Name on Card</p><input type="text" placeholder=" name in card"/>
                    </div>
                    <div>
                        <h4 ref={lockRef} className={style.seatbooked}>Sorry the seat was booked</h4>
                        <h5
                        onClick={()=>loader()}
                        >Pay &#8377;{(priSeats.map((e)=>e.prize)).reduce((acc,cur)=>
                        acc+cur
                        ,0)+tax+platFormFee}</h5>
                        
                        <pre>Secure Pay</pre>
                     
                    </div>
                    <div ref={loadRef} className="loading2"> 
                        <OrbitProgress size="large" text="Please Wait"  />
                </div>
            </div>
        </div>
    );
}
export default Payment;