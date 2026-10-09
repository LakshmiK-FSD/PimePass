import { useRef } from "react";
import { ReceiptText,MessagesCircle,LogOut,ScrollText,MessageCircleQuestionMark} from 'lucide-react';
import style from "./ProfileDetl.module.css"
import { useNavigate } from "react-router-dom";
import Login from "../Login/Login";
function ProfileDetl(props){
   const userName = localStorage.getItem("userName");
   const phNo = localStorage.getItem("phNo");
   const id = localStorage.getItem("id");
   const email = localStorage.getItem("email");
  function logout(){
    localStorage.clear();
    window.location.reload();
  }
  const navi = useNavigate();
  return(
    <div className={style.moveCover}>
      <div className={style.scrprev}>
      <div className={style.box1}><h3>Profile</h3></div>

     <div><div className={style.boxalign}><div className={style.profile}>
   <h6>{userName && userName.slice(0,1)}</h6>
    </div><div className={style.nameing}>
      <h2>{userName}</h2>
      <p>userId: #{id && id.padStart(8,"0")}</p>
      </div></div> </div>
      <div className={style.support}><p> Bookings</p><div className={style.hed}><ReceiptText size={24}/><h4>view bookings </h4></div></div>
      <div className={style.support}><p>Support</p>
      <div className={style.hed}><MessagesCircle size={24} /><h4>Chat With Us</h4></div>
      </div>
      <div className={style.support}><p>More</p>
      <div className={style.hed}><MessageCircleQuestionMark size={22} /><h4>Conditions</h4></div>
      </div>
      <div className={style.support2}>
      <div className={style.hed}><ScrollText size={24} /><h4>privacy Policy</h4></div>
      <div onClick={logout} className={style.logout}><div className={style.down}><LogOut size={24} /> </div><span > Logout</span></div>
      </div >
      </div>
    </div>
  );
}
export default ProfileDetl