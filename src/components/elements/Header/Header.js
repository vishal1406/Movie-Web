import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="topnav">
        <span>
          <Link to="/" className="moto">Movie</Link>
        </span>
        <span>
          <Link to="/tvSeries" className="moto">Tv-Series</Link>
        </span>
        <span>
          <Link to="/actors" className="moto">Actors</Link>
        </span>
        <div className="topnav-right">
          <span>
            <Link to="/signin" className="moto">Signin</Link>
          </span>
          <span>
            <Link to="/signup" className="moto">Signup</Link>
          </span>
        </div>
      </div>
    )

}
export default Header;