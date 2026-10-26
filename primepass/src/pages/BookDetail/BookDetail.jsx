import { useLocation, useParams } from "react-router-dom";
import Bookinfo from "@pages/Bookinfo/Bookinfo"
import Header from "@components/Header";

function BookDetail(){
    const {movid} = useParams();
    const locate = useLocation();
    const arr = locate.state?.arr
    const seats = locate.state?.seats
    const theater = locate.state?.theatdet;
    const amt = locate.state?.amt;
    return(<div>
          <Header show={true} shownav={true}/>
        <Bookinfo theat={theater} movid={movid} seats={seats} arr={arr} paid={amt}/>
    </div>)
}

export default BookDetail;