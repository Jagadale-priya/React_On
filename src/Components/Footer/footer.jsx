import React from 'react'
import './footer.css'
import Waves1 from '../../img/Waves1.png'
import Insta from '../../img/waves3.png'
import GitHub from '../../img/git2.png'
import FaceBook from '../../img/fb2.png'

function footer() {
  return ( 
    <div className='footer'>
        <img src={Waves1}  alt="" />
        <div className="f-contect">
             <span>Andrew@.com</span>
             <div className="f-icons">
              <div className="icos1"><img src={Insta} height="60px"  alt="" /></div>
              <div className="icons2"><img src={GitHub} height="60px" alt="" /></div>
              <div className="icons3"><img src={FaceBook} height="60px"  alt="" /></div>
             </div>
        </div>
    </div>
  )
}

export default footer