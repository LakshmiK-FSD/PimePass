import { useLocation, useParams } from "react-router-dom";
import style from "./BookDetail.module.css"
import Bookinfo from "../Bookinfo"
import Header from "../Header";
function BookDetail(){
    const {movid} = useParams();
    const locate = useLocation();
    const arr = locate.state?.arr
    const theater = locate.state?.theatdet;
    return(<div>
          <Header/>
        <Bookinfo theat={theater} movid={movid} arr={arr}/>
    </div>)
}

export default BookDetail;