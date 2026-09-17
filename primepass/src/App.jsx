import './App.css'
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';
function App() {
return(
  <><div className='primepass'>
  <Header/>
  <div id='bgall'>
  <Slider/>
<Content/>
  <Footer/></div>
  </div>
  </>
);
}
export default App
