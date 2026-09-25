import AboutContent from "./AboutC/AboutContent.jsx";
import Footer from "./Footer";
import Header from "./Header";

function AboutUs(){
    return(
        <div>
            <Header shownav={true}/>
           <AboutContent/>
            <Footer/>
        </div>
    );
}
export default AboutUs;