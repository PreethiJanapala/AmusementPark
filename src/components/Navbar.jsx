import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//import Img from './photo.jpg'



const Navbar = () => {
  return (
    <div>
       <table class="menu">
                    <tr>
                    
                    <td><a href="/SignUp" className="btn btn-primary">SignUp</a></td>
                     <td><a href="/NewLogin" className="btn btn-primary">Login Here</a></td>
                    
                    
                    </tr>
  </table>    
 
					<p>
            WELCOME TO Amusement!!
          </p>
	

    </div>
  );
};

export default Navbar;
