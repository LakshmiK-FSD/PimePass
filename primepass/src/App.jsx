import './App.css'
import Footer from './Footer';
import Header from './Header';
import hero from './assets/image.png'
function App() {
return(
  <><div className='primepass'>
  <Header/>
  <img src={hero} alt="" />
  <Footer/>
  </div>
  </>
);
}
export default App
