import AboutContent from "@pages/AboutC/AboutContent.jsx";
import Footer from "@components/Footer";
import Header from "@components/Header";

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