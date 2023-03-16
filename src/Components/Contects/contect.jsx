import React, { useState } from 'react';
import './contect.css';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Contectxt';
import { useContext } from 'react';

function Contect() {
   
    const form = useRef();

    const [done, setDone] =useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_lbld6ct', 'template_xw08ktn', form.current, 'JZq9D5b4ovc6Kz6y8_vFq')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='contect-from'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contect me</span>

                <div className="blur s-blurl" style={{background: "#ABF!FF($"}}></div>
            </div>
        </div>
         
         <div className="c-right">
            <form ref={form} onSubmit={sendEmail}> 
                <input type="text" name='user-name' className='user' placeholder='Name' />
                <input type="user-email" className='user' placeholder='Email' name="email" id="" />
                <textarea name="messege" className='user' placeholder='Message' id="" cols="30" rows="10"></textarea>
                <input type="submit" value="send" className='button'/>
                 
                 <span>{done && "Thanks For COntactin Me !"}</span>

                <div className="blur c-blurl" style={{background: "var(--purple)"}}>
                    
                </div>
            </form>
         </div>

    </div>
  )
}

export default Contect