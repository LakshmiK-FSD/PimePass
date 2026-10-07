import style from './Login.module.css'
function Login(){
    return(
        <div className={style.loger}>
            <div className={style.llogin}>
                <div className={style.forinput}>
                    <div className={style.containr}>
                        <div className={style.email}>
                <h6>Email</h6>
                <input type="text" placeholder='abc@example.com' /></div>
                 <div className={style.password}><h6>Password</h6>
                <input type="password" placeholder='atleast 4digits'/>
                </div></div></div>
            </div>
        </div>
    );
}
export default Login;