import api from '@services/api'
import { useState } from 'react';
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';
function Login(){
    const [emails,setEmail] = useState(null);
    const [passwords,setPassword] = useState(null);
    function mail(e){
        setEmail(e.target.value);
        console.log(e.target.value);
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
                           <h6>Email</h6>
                           <input onChange={mail} type="text" placeholder='abc@example.com' />
                        </div>
                        <div className={style.password}>
                            <h6>Password</h6>
                            <input onChange={pass} type="password" placeholder='At least 4 character'/>
                        </div>
                        <div>
                            <div className={style.submit} onClick={send}>Sign in</div>
                            <div className={style.subnew}><div className={style.cent}><p>New here?</p><h6 onClick={()=>Register()}>Create an Account</h6></div></div>
                            <div className={style.subdemo}><div className={style.democent}> <p>Demo Login:</p><h5>lakshmikandan2020@gmail.com / 2004</h5></div></div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;