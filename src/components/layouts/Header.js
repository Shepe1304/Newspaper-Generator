import React from "react";
import "./Header.css";
import shepeIcon from "../assets/img/shepe.png";

const Header = () => {
  return (
    <div className="header">
      <img src={shepeIcon} alt="icon of a shepe" className="header--icon" />
      <div className="header--texts">
        <div className="header--website_name">Newspaper Generator</div>
        <div className="header--slogan">
          Create an exciting newspaper for your campaign with ease
        </div>
      </div>
    </div>
  );
};

export default Header;
