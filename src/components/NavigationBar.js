import React, { useContext } from "react";
import { userAuthContext } from "../Context/userAuthContext";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const { setShowProfile } = useContext(userAuthContext);

  const handleLogout = () => {
    setShowProfile("");
  };

  return (
    <header>
      <nav className="nav-bar">
        <div className=" logo">SAVEPRO</div>

        <ul className="nav-list">
          <li>
            <NavLink to="/" className="anchor">
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink to="/profile" className="anchor">
              USER PROFILE
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="anchor">
              CONTACT ME
            </NavLink>
          </li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          LOG OUT
        </button>
      </nav>
    </header>
  );
};

export default NavigationBar;
