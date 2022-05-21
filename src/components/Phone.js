import React from 'react'
import PhoneInput from 'react-phone-number-input'
import "./Phone.css";
import { useState } from 'react';

const Phone = () => {
    const [value, setValue] = useState()
    
    return (
        <div >
            <PhoneInput className="phone"
            placeholder="+91" 
            value={value} value = "+91"
            onChange={setValue}/>
            
        </div>
    )
}

export default Phone