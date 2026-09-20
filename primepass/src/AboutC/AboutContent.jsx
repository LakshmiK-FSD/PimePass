import style from "./AboutContent.module.css";
import ourteam from "../assets/ourteam.png";
function AboutContent() {
  return (
    <div className={style.aboutConten}>
      <div className={style.primepasscon}>
        <h4>About PrimePass</h4>
        <h3>One pass, every seat in the house.</h3>
        <p>
          We built PrimePass so booking a movie or a live event takes thirty
          seconds, not thirty taps. From your first EventPass to your hundredth
          MoviePass, we're the team making sure the show goes on without the
          queue.
        </p>
      </div>

      <div className={style.str}>
        <div className={style.rightstr}>
          <h3>Why we started</h3>
          <p>
            PrimePass began in Cuddalore with a simple frustration: booking
            tickets shouldn't take longer than the trailer. We started with
            movie tickets, then added live events, because the same problem
            showed up everywhere — long lines, confusing seat maps, and apps
            that made you work for a simple booking.
          </p>
          <p>
            Today PrimePass connects moviegoers and event-goers directly to the
            shows they want, with real seats, real-time availability, and one
            account for everything.
          </p>
          <div className={style.strdetails}><i className={style.i3}></i><div><span>2026</span><p>Founded</p></div>
          <i className={style.i3}></i><div><span>Cuddalore</span><p>Headquartes</p></div>
          <i className={style.i3}></i><div><span>40+</span><p>Theatres</p></div><i className={style.i3}></i><div><span>2</span><p>crore passes</p></div></div></div>
          <img src={ourteam} alt="none" />
        </div>

        <div className={style.userinfo}>
            <div className={style.heading}>
          <h3>What you get with PrimePass</h3>
          <p>Two passes, one account, zero queues.</p></div>
          <div className={style.ourpasses}>
            <div className={style.movie}>
                <h4>Movies Pass</h4>
                <p>Reserve movie seats across your city's theatres, check showtimes, and skip the box-office line.</p>
            </div>
            <div className={style.events}>
                <h4>Events Pass</h4>
                <p>Book concerts, shows, and live experiences near you, with seat selection and instant e-tickets.</p>
            </div>
            <div className={style.organize}>
                <h4>Organize</h4><p>Organize events effortlessly with streamlined tools to manage bookings, schedules, and venues.</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default AboutContent;
