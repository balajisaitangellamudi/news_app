import React from "react";
import "../Assets/Styles/Header.css";
import logo from "../Assets/Images/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const nav_links = [
    {
      path: "subscribe",
      link: "Subscribe",
    },
    {
      path: "register",
      link: "Register",
    },
    {
      path: "login",
      link: "Login",
    },
  ];

  return (
    <>
      <div className="header_container">
        {/* Logo and person details section starts */}
        <div className="header">
          <div className="logo ">
            <img src={logo} alt="logo" className="img-fluid" />
          </div>
          <div className="person_details">
            <div className="login_details">
              {nav_links.map((each_nav) => (
                <Link to={each_nav.path}>{each_nav.link}</Link>
              ))}
            </div>
            <div className="countries">
              <p className="mb-0"> Countries</p>
              <div className="border border-black">1</div>
              <div className="border border-black">2</div>
              <div className="border border-black">3</div>
              <div className="border border-black">4</div>
              <div className="border border-black">5</div>
              <div className="border border-black">6</div>
              <div className="border border-black">7</div>
            </div>
          </div>
        </div>
        {/* Logo and person details section ends */}

        {/* Nav bar Section starts */}
        <div className="border border-black nav_bar">
          <div className="nav_links">
            <div className="border border-black">1</div>
            <div className="border border-black">2</div>
            <div className="border border-black">3</div>
            <div className="border border-black">4</div>
            <div className="border border-black">5</div>
            <div className="border border-black">6</div>
            <div className="border border-black">7</div>
          </div>

          <div className="search"> Search bar... </div>
        </div>
        {/* Nav bar Section ends */}
      </div>
    </>
  );
};

export default Header;
