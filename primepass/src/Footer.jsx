import logo from './assets/fav2.png';
import Media from './Media';

function Footer() {
  return (
     <div className="footermain">
    <div className="footer">
      <div className="footbox">
        
        <div className="footlogo">
          <div className="primefo">
            <img src={logo} alt="" />
            <h4>PrimePass</h4>
          </div>
          <p>
            Your all-in-one pass for movies and live events - book seats, skip queues, and never miss a show.
          </p>
        <Media/>
        </div>

        <div className="fs1">
          <h4>Company</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#support">Support</a></li>
            <li><a href="#carrers">Careers</a></li>
          </ul>
        </div>

        <div className="fs2">
          <h4>Passes</h4>
          <ul>
            <li><a href="#">EventPass</a></li>
            <li><a href="#">MoviePass</a></li>
            <li><a href="#">Gift cards</a></li>
            <li><a href="#">Offers</a></li>
          </ul>
        </div>

        <div className="fs3">
          <h4>Get in Touch</h4>
          <div className='footlast'>
          <p>
            <span className='footchild'>Email</span> <p > primepass@gmail.com</p>
          </p>
          <p>
            <span className='footchild'>Phone</span> <p >+919889776630</p>
          </p>
          <p>
            <span className='footchild'>Address</span> <p >Cuddalore, Tamil Nadu, India </p>
          </p>
          </div>
        </div>

        <div className="fs3"></div>
      </div>

      <div className="copyright">
        <p>© 2026 PrimePass. All rights reserved.</p>
        <div className="legallinks">
      <a href="#">Privacy policy</a>
      <a href="#">Terms of service</a>
      <a href="#">Refund policy</a>
    </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
