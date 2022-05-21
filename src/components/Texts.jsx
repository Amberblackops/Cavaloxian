import React from 'react';
import "./Texts.css";
import image4 from "../img/mask.png";

const Texts = () => {
    return (
      <div>
           <div className="te">
               <img src={image4} className="mask" alt="" />
                  <p className="text-1">INVEST</p>
                  <p className="text-2">IN</p>
                  <p className="text-3">FUTURE</p>
           </div>
           <div>
               <p className="copy">COPYRIGHT &copy; 2021 CAVALOX </p>
               <p className="privacy">PRIVACY POLICY | TERMS & CONDITIONS</p>
           </div>
      </div>
    )
  }
  export default Texts