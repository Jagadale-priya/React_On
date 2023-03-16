import React from 'react'
import './services.css'
import Heart from '../../img/heart.jpg';
import Sunglass from '../../img/sunclases.png';
import HangOver from '../../img/hang.png';
import Card from '../Card/Card';
import { themeContext } from '../../Contectxt';
import { useContext } from 'react';
import {motion} from 'framer-motion'


const Services = () => {

  const transition = {duration: 1, type: 'spring'}

  const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>


        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
          <span>Services</span>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit  autem rerum ex <br /> commodi  at soluta deserunt aliquid sunt?</span>
          <a href=""><button className='button s-button'>Download CV</button></a>
          
          <div className="blur s-blurl" style={{background: "#ABF1FF94"}}></div>
        </div>
         
        <div className="cards">
            <motion.div
            whileInView={{left: '14rem'}}
            initial={{left: '25rem'}}
            transition={transition}


            style={{left: '14rem'}}>
                <Card
                emoji = {Heart}
                heading = {'Design'}
                detail = {"Figma, Sketch, PhoToshop, Adobe, Adobe xd"}
                />
            </motion.div>
            <motion.div
              whileInView={{left: '1rem'}}
              initial={{right: '25rem'}}
              transition={transition}
  
  
             style={{top: '12rem', left: "-4rem"}}>
                <Card
                emoji={Sunglass}
                heading={"Devloper"}
                detail={"Html, Css, JavaScript, React"}
                />
            </motion.div>
            <motion.div
            
            whileInView={{left: '16rem'}}
            initial={{right: '25rem'}}
            transition={transition}


            style={{top: "19rem", left: "12rem"}}>
                <Card
                emoji={HangOver}
                heading={"UI/UX"}
                detail={"Lorem ispu dummy text are usually use in section where we need some random text"}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services