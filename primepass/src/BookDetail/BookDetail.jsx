import { useLocation, useParams } from "react-router-dom";
import style from "./BookDetail.module.css"
import Bookinfo from "../Bookinfo"
import Header from "../Header";
function BookDetail(){
    const {movId} = useParams();
    const locate = useLocation();
    const arr = locate.state?.arr
    const theater = locate.state?.theatdet
    return(<div>
          <Header/>
        <Bookinfo theat={theater} movId={movId} arr={arr}/>
    </div>)
}

export default BookDetail;