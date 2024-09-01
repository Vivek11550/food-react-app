import React from 'react'
import { assets } from '../../assets/assets'
import"./Header.css"


const Header = () => {
  return (
      <div className='Header'>
      <h1>order your food here</h1>
        <img src={assets.header_img} alt="" className='Header-img'/>
      </div>

  );
}

export default Header
