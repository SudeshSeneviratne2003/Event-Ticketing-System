import React from "react";
import { useNavigate } from 'react-router-dom';

function Navbar() {

  return (
    <div>
      <nav className="navbar shadow-lg">
        <a className="navbar-brand" href="#">
          <b>
            <i><h1 className="h1-font">Event Ticketing System</h1></i>
          </b>
        </a>

        <div className="navbar-container">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn btn-primary bg-white text-black px-3 border-black"><b>Login</b></button>
              <button className="btn btn-primary bg-white text-black border-black"><b>Signup</b></button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
