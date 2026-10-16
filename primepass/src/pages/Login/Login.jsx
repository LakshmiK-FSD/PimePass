import api from '@services/api'
import { useRef, useState } from 'react';
import style from './Login.module.css';
import Register from '@pages/Register/Register'
import { useNavigate } from 'react-router-dom';
function Login(){
    const regRef = useRef();
    const [emails,setEmail] = useState(null);
    const [passwords,setPassword] = useState(null);
    function mail(e){
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    function register(){
          regRef.current.style.display = "block";
    }
    function pass(e){
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    
    async function send(){
       try{ 
        const res = await api.post("/login",{   
                 password:passwords,
                 email:emails  
            });
         const tokenOp =res.data;
         localStorage.setItem("token",tokenOp.Token);
         localStorage.setItem("email",tokenOp.email);
         localStorage.setItem("userName",tokenOp.userName);
         localStorage.setItem("phNo",tokenOp.phNo);
         localStorage.setItem("id",tokenOp.id);
          window.location.reload();
        }
            catch (error){
              console.log(error)
            }
    }
    return(
        <div className={style.loger}>
            <div className={style.llogin}>
                <div className={style.forinput}>
                    <div className={style.containr}>
                        <div className={style.email}>
                           <h6 className={style.hf}>Email</h6>
                           <input className={style.iner} onChange={mail} type="text" placeholder='abc@example.com' />
                        </div>
                        <div className={style.password}>
                            <h6 className={style.hf}>Password</h6>
                            <input className={style.iner} onChange={pass} type="password" placeholder='At least 4 character'/>
                        </div>
                        <div>
                            <div className={style.submit} onClick={send}>Sign in</div>
                            <div className={style.subnew}><div className={style.cent}><p className={style.pf2}>New here?</p><h3 className={style.hf2} onClick={()=>register()}> 
                                <div ref={regRef} className={style.register}><Register/>
                            </div> Create an Account</h3></div></div>
                            <div className={style.subdemo}><div className={style.democent}> 
                            </div></div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;