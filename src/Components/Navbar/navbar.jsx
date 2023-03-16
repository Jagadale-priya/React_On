import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/toggle'
import {Link} from 'react-scroll'

function navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Andrew</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: "none"}}>
                
                    <Link spy={true} to='navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Experience' smooth={true} >
                    <li>Experience</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} >
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Testimonials' smooth={true} >
                    <li>Testimonials</li>
                    </Link>
                    
                    
                    
                    
                </ul>
            </div>
            <button className="button n-button">
                Contect 
            </button>
        </div>
    </div>
  )
}

export default navbar