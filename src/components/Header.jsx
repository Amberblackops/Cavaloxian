import React from "react";
import "../css/Header.css";
// import FormFields from "./FormFields"
import image1 from "../img/bg.png";
import image2 from "../img/cavaloxian.png";
import image3 from "../img/image.png";
import { GiSpeaker } from 'react-icons/gi';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Header = () => {
  return (
    <div className="header">
      <img src={image3} className="logo" />
      <GiSpeaker className="speaker" size={40}/>
      <HiOutlineMenuAlt4 className="menu" size={40}/>
      <img src={image1} className="img-background" alt="bg-img" />
      <button id="btn" className="btn">
        Connect to wallet
      </button>
      <img className="cav-back" src={image2} alt="bg-img" />
      <span className="cav-up-front">BE &nbsp; A</span>
      <span className="cav-front">CAVALOXIAN!</span>
    </div>
  );
};

export default Header;
