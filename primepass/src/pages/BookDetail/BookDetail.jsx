import { useLocation, useParams } from "react-router-dom";
import Bookinfo from "@pages/Bookinfo"
import Header from "@components/Header";

function BookDetail(){
    const {movid} = useParams();
    const locate = useLocation();
    const arr = locate.state?.arr
    const theater = locate.state?.theatdet;
    return(<div>
          <Header show={true} shownav={true}/>
        <Bookinfo theat={theater} movid={movid} arr={arr}/>
    </div>)
}

export default BookDetail;