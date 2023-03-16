import React from 'react'
import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Profile1 from '../../img/profile1.jpg'
import Profile2 from '../../img/profile2.jpg'
import Profile3 from '../../img/profile3.jpeg'
import Profile4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

function testimonials() {
   const clients =[
      {
        img: Profile1,
        review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, itaque autem! Nemo asperiores iste necessitatibus enim eaque ratione ea deserunt possimus inventore quod."
      },
      {
        img: Profile2,
        review:
       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis, pariatur error numquam rem impedit odio qui, voluptatem suscipit earum itaque ad, voluptatum omnis quae vero."
      },
      {
        img: Profile3,
        review:
       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis, pariatur error numquam rem impedit odio qui, voluptatem suscipit earum itaque ad, voluptatum omnis quae vero."
      },
      {
        img: Profile4,
        review:
       " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore debitis, pariatur error numquam rem impedit odio qui, voluptatem suscipit earum itaque ad, voluptatum omnis quae vero."
      }
   ]
  return (
    <div className='t-Wrapper' id='Testimonials'> 
    <div className="t-heading">
        <span>Clients always get</span>
        <span>Exceptional Work</span>
        <span>From Me...</span>
        <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
        <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        
    </div>
    <Swiper modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
       >
        
        {clients.map((client, index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className="testimonials">
                    <img src={client.img} alt="" />
                    <span>{client.review}</span>
                    </div>
                   
                </SwiperSlide>
            )
        })}
    </Swiper>

    </div>
  ) 
}

export default testimonials