import React from 'react'
import './works.css'
import Fever from '../../img/fever.png';
import Facebook from '../../img/fb.png';
import Amezon from '../../img/amezon2.webp';
import Upwork from '../../img/upwork.webp';
import Shopping from '../../img/shopping.png';
import { themeContext } from '../../Contectxt';
import { useContext } from 'react';
import {motion} from 'framer-motion';


function Works() {
    const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
          <span>Brands & Clients</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit  autem rerum ex <br />
           commodi  at soluta deserunt aliquid sunt
           <br />
           commodi  at soluta deserunt aliquid sunt?
           
           </span>
          <a href=""><button className='button s-button'>Hire Me</button></a>
          
          <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
         <div div className="w-right">
             <motion.div
             initial={{rotate: 45}}
             whileInView={{ rotate: 0}}
             viewport={{margin: '-40px'}}
             transition={{duration: 3.5, type: 'spring'}}
             className="w-maincircle">
                <div className="w-secCircle">
                    <img src={Upwork} height="50px" alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fever} height="50px" alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amezon} height="73px" alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopping} height="50px" alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} height="50px" alt="" />
                </div>
            </motion.div>
            <div className="w-backcircle blueCircle"></div>
            <div className="w-backcircle yellowcircle"></div>
         </div>
    </div>
  )
}

export default Works