import React from 'react'
import { Link } from 'react-router-dom'
import homelogo from './UserImages/images.png'
import searchicon from './UserImages/searchicon.png'
import loginicon from './UserImages/loginicon.png'
import cart from './UserImages/cart.png'
import seller from './UserImages/seller.png'
import menu from './UserImages/menu.png'

const Head = () => {
  return (
    <div className='homeHead'>
      <div className='logoSearch'>
        <img src={homelogo} alt='img' style={{ width: "160px", height: "100px",objectFit:"contain" }} />
        <div className='searchdiv'>
          <button className='searchiconbtn' ><img src={searchicon} alt='img' className='searchicon'></img></button>
          <input type='search' name='search' className='searchbox' placeholder='Search for Products, Brands and More'></input>
        </div>

        <div className='dropdown'>
          <div className='Userlinks'>

            <button className="dropbtn"> <img src={loginicon} alt="loginiconimg" className='linklogos' />Login</button>
          </div>
          <div className="dropdown-content">
            <Link to={'/User/PersonalInfo'} className='Userlinks'>MyProfile</Link>
            <Link to={'/User/Editprofile'} className='Userlinks'>EditProfile</Link>
            <Link to={'/User/Changepassword'} className='Userlinks'>Changepassword</Link>
            <Link to={'/User/WishList'} className='Userlinks'>WishList</Link>
            <Link to={'/User/Orders'} className='Userlinks'>My Orders</Link>
            <Link to={'/User/Coupons'} className='Userlinks'>Coupons</Link>
            
            
           
          </div>
        </div>

        <div className='Userlinks'>

        <Link to={'/User/PageCart'} className='Userlinks'><button className="Cart"><img src={cart} alt="cartimg" className='linklogos' />Cart</button></Link>
        </div>

        <div className='Userlinks'>

          <button className="BecomeaSeller"><img src={seller} alt="sellerimg" className='linklogos' />Become a Seller</button>
        </div>

        <div className='Userlinks'>

          <button className="extramenu"><img src={menu} alt="menuimg" className='linklogos' /></button>
        </div>

      </div>



    </div>
  )
}

export default Head