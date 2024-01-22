import { Outlet, NavLink, useLocation } from "react-router-dom";
import paw from '../assets/paw.png';
import homeIcon from '../assets/home.webp';
import hamburger from '../assets/hamburger.png';
import dropdown from '../assets/dropdown.png';
import email from '../assets/email.png';
import { useState } from 'react';

export default function NavBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <header className="navHeader">
        <nav className="navbar">
          <h1>AMIGOS DYREINTERNAT</h1>

          <NavLink to="/">
            <img src={homeIcon} alt="Home" className="navIcon" />
            Hjem
          </NavLink>

          <NavLink to="pets">
            <img src={paw} alt="Search" className="navIcon" />
            Kæledyr
          </NavLink>

          <NavLink to="contact">
            <img src={email} alt="Email" className="navIcon" />
            Kontakt
          </NavLink>

          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropbtn">
              <img src={hamburger} alt="Hamburger" className="navIcon" />
              Mere
              <img src={dropdown} alt="Dropdown" className="navIconRight" />
            </div>
            {dropdownVisible && (
              <div className="dropdown-content">
                <NavLink to="admin">Admin</NavLink>
                <NavLink to="flexbox">Flexbox</NavLink>
                <NavLink to="grid">Grid</NavLink>
              </div>
            )}
          </div>

        </nav>
      </header>
    </div>
  );
}
