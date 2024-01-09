import React from 'react'
import './Gueststyle.css'
import { Link } from 'react-router-dom'
import logo from './GuestImages/images.png'



const Head = () => {
  return (
    <div className='headfulldiv'>
      <div className='headcontainer'>
        <div className='sidelogodiv'><img src={logo} alt='img' style={{ width: "120px", height: "80px", objectFit: "contain" }} /></div>
       

        <div className='linksUS'>
          <Link to={'/User'} className='linkshop'>Home</Link>
          <Link to={'/Guest/Shop'} className='linkshop'>About Us</Link>
          <Link to={'/Guest/User'} className='linkuser'>User</Link>
          <Link to={'/Guest/Shop'} className='linkshop'>Shop</Link>
          <Link to={'/Guest/Shop'} className='linkshop'>Contact Us</Link>

        </div>
      </div>
    </div>
  )
}

export default Head