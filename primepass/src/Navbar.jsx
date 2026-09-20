import { useNavigate } from "react-router-dom";
function Navbar(){
     const navigate = useNavigate();
    return (
        <>
        <div className="header">
            <p onClick={()=>navigate('/')}>Home</p>
            <p onClick={()=>navigate('/aboutus')}>AboutUs</p>
            <p onClick={()=>navigate('/aboutus')}>Passes</p>
            <p onClick={()=>navigate('/aboutus')}>Organize</p>
            <p onClick={()=>navigate('/aboutus')}>MyPasses</p>
        </div>
        </>
    );
}
export default Navbar