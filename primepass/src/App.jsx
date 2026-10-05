import '@assets/App.css'
import Content from '@pages/Content';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Slider from '@pages/Slider';
function App() {
return(
  <><div  className='primepass'>
  <Header shownav={true} show={true}/>
  <div id='bgall'>
  <Slider/>
  <Content/>
  <Footer/></div>
  </div>
  </>
);
}
export default App
