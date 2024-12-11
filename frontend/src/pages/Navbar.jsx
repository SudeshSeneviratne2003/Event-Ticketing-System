import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function Navbar () {

  return (
    <div className='navbar-main'>
      <nav className="navbar shadow-lg">
        <a className="navbar-brand" href="#">
          <b>
            <i>
              <h1 className="h1-font">Event Ticketing System</h1>
            </i>
          </b>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
