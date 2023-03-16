import React from 'react'
import './poartf.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Web1 from "../../img/web.png"
import Web2 from "../../img/web2.webp"
import Web3 from "../../img/web3.webp"
import Web4 from "../../img/web4.jpg"
import 'swiper/css'
import { themeContext } from '../../Contectxt';
import { useContext } from 'react';

const Poartf = ()  => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper spaceBetween={30} slidesPerView={2.5} grabCursor={true} className='portfolio-slider'>
        
        
<SwiperSlide>
   <img src={Web1} height="200px" alt="" />
</SwiperSlide>
<SwiperSlide>
   <img src={Web2} height="200px" alt="" />
</SwiperSlide>
<SwiperSlide>
   <img src={Web3} height="200px" alt="" />
</SwiperSlide>
<SwiperSlide>
   <img src={Web4} height="200px" alt="" />
</SwiperSlide>


      </Swiper>
    </div>
  )
}

export default Poartf