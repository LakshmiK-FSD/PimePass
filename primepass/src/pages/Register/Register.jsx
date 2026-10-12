import { useRef, useState } from "react";
import style from "./Register.module.css";
import api from '@services/api';
function Register(){
    const [usename,setUsername]=useState(null);
    const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const [phNo,setPhNo]=useState(null);
    const [Cpassword,setConfirmPass]=useState(null);
    const redRef = useRef();
    const redRef2 = useRef();
    const redRef3 = useRef();
    const redRef4 = useRef();
    function userName(e){
      setUsername(e.target.value);
    }
    function mail(e){
      setEmail(e.target.value);
    }
    function phNum(e){
      setPhNo(e.target.value);
    }
    function pass(e){
      setPassword(e.target.value);
    }
    function emailCheck(eml){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(eml)){
            return true
        }
        return false
    }
    function confirmPass(e){
        setConfirmPass(e.target.value);
    }
   async function sender() {
         try{
                const res = await api.post("/register",
                    {
                        username:usename,
                        email:email,
                        password:password,
                        phoneNo:phNo
                    }
                )
                if(res){
                    window.location.reload();
                }
            }
            catch(error){
                console.log(error);
            }
    }
   async function submit(){
        try{(password != Cpassword)?redRef.current.style.display="block":redRef.current.style.display="none";}
        catch(error){
            console.log(error)
        }
         try{(password.length<4)?redRef2.current.style.display="block":redRef2.current.style.display="none";}
         catch(error){
            console.log(error)
        }
         try{(phNo.length!=10)?redRef3.current.style.display="block":redRef3.current.style.display="none";}
         catch(error){
            console.log(error)
        }
         try{!(emailCheck(email))?redRef4.current.style.display="block":redRef4.current.style.display="none";}
         catch(error){
            console.log(error)
        }
        if((usename.length > 3) && (password == Cpassword) && (password.length>=4) && (phNo.length==10) && (emailCheck(email))){
            await sender();
        }
    }
    return(
        <div>
            <form >
            <div className={style.regi}> 
                 <div className={style.header}><h5>Create Account</h5>
            <p>Register to start Booking</p>
            </div>
                <div className={style.userName}>
                    <h5 className={style.head}>UserName</h5>
                    <input onChange={userName} type="text" placeholder='Enter Your Name' />
                </div>
                <div className={style.email2}>
                    <h5 className={style.head}> Email</h5>
                    <input onChange={mail} type="text" placeholder='Enter Your Mail' />
                    <p className={style.digit} ref={redRef4}>Enter a Valid Mail</p>
                </div>
                <div className={style.phNo2}>
                    <h5 className={style.head}>Phone Number</h5>
                    <input onChange={phNum} type="number" placeholder='Enter Your MobileNo' />
                    <p className={style.digit} ref={redRef3}>Enter a Valid Number</p>
                </div>
                <div className={style.password2}>
                    <h5 className={style.head}>Password</h5>
                    <input onChange={pass} type="password" placeholder='At least 4 character'/>
                    <p className={style.digit} ref={redRef2}>Atleast 4 character </p>
                </div>
                <div className={style.password2}>
                    <h5 className={style.head}>Conforim Password</h5>
                    <input onChange={confirmPass} type="password" placeholder='Re-Enter Password'/>
                    <p ref={redRef}>PassWord Do not match</p>
                </div>
                <div className={style.subRow}>
                    <button type="reset">Reset</button>
                    <div onClick={submit} className={style.submit}>submit</div>
                </div>
            </div>
            </form>
        </div>
    );
}
export default Register;