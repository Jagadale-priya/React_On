import React from 'react'
import './Intro.css'
import LinkedIn from '../../img/link-in.png';
import Instagram from '../../img/insta.jpg';
import Github from '../../img/git.png';
import Blue from '../../img/blue-paint-brush-stroke-6.png';
import Boy from '../../img/wp.jpeg';
import Crown from '../../img/crown.avif';
import Orange from '../../img/orange-paint-splash-clipart.png';
import Thumb from '../../img/thumb.png';
import Emoji from '../../img/imoji2.jpg';
import Blue2 from '../../img/blue2.png';
import Orange2 from '../../img/orange2.png';
import Flotingdiv from '../FlotingDiv/Flotingdiv';
import { themeContext } from '../../Contectxt';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Intro = () => {

  const transition = {duration : 2, type: 'spring'}


const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

  return (
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}} >Hy! I Am</span>
                <span>Priya Devloper</span>
                <span>Frontend Devloper with high level of expirence 
                     in web designing and devlopment, producting 
                      the Quality work</span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} height="70px"  alt="" />
                <img src={LinkedIn} height="70px" alt="" />
                <img src={Instagram} height="70px" alt="" />
            </div>
        </div>
        <div className="i-right">
         
         <img src={Blue2} height="600px" width="750px" alt="" />
         <img src={Orange2} height="500px" width="500px" alt="" />
        <div className="boy"> <img src={Boy} height="200px" width="200px" alt="" /></div>
        <motion.img
        initial={{left: '-36%'}}
        whileInView={{left: '-24%'}}
        transition={transition}
        src={Emoji} height="90px" alt="" />
          <motion.div 
          initial={{top: '-4%', left: '74%'}}
          whileInView={{left: '68%'}}
          transition={transition}
          
          style={{top: '-4%', left: '68%'}}
         className='floating-div'
          >
            <Flotingdiv image={Crown} text1='Web' text2='Devloper' />
            </motion.div>
          <motion.div
          initial={{left: '9rem', top: '18rem'}}
          whileInView={{left: '0rem'}}
          transition={transition}
          
          floating-div
          style={{top: '16rem', left: '0rem'}}><Flotingdiv image={Thumb} text1='Best Design' text2='Award'/> </motion.div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{background: '#C1F5FF',
                                     top: '17rem',
                                     width: '21rem',
                                     height: '11rem',
                                     left: '-9rem'
                                     }}></div>
        </div>

    </div>
  )
}

export default Intro