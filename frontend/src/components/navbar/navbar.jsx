import React from 'react'
import "../navbar/navbar.css"
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={assets.logo} alt="logo"  className='logo'/>
      <ul className='Navbar-menue'>
        <li>Home</li>
        <li>menue</li>
        <li>mobile-app</li>
        <li>contact-us</li>
      </ul>
      <div className='nav-right'>
        <img src={assets.search_icon} alt="" />
        <div>
        <img src={assets.basket_icon} alt="" />
        <div className='dot'></div>
        </div>
        <button className='nav-btn'>signin</button>
      </div>
    </div>
  )
}

export default Navbar 
