import { Link } from "react-router-dom";
import {BugOff} from 'lucide-react';
function Error(){
    return(
        <div>
            <div className="error">
<<<<<<< HEAD
                 
=======
               
>>>>>>> b6ba53b7c3c576069c135e7319de5f4fca034018
      <h1 className="er404">404</h1>
 <BugOff size={106} color="#050505" strokeWidth={1.25} />
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="tooL">
        Go Back Home
      </Link>
    </div>
        </div>
    );
}
export default Error;