import React from 'react'
import image2 from "../img/bg2.png";
import "../css/Middle.css";
import Phone from "./Phone";
  
const Middle = () => {
  return (
    <div className="middle">
        <img src={image2} className="img-middle" alt="bg-img2" />
        <div className="form">
          
            <input type="text" className="name"  placeholder="FIRST NAME" />
            <input type="text" className="name" placeholder="LAST NAME" />
            <input type="email" className="email" placeholder="EMAIL"  />
            <Phone className="item2"/>
            <input type="text" className="country" placeholder="COUNTRY" />
             <div className="rad">
               <input type="radio" className="terms" id="agree" value="I AGREE TO THE TERMS AND CONDITIONS"/>
              <label for ="agree">I AGREE TO THE TERMS AND CONDITIONS</label> <span id="sp"> T&C</span>
              </div>
              <button type="button" href="#" className="btn-1">SUBMIT</button>
        </div>
    </div>
  )
}

export default Middle;