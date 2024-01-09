import React from 'react'
import { Link } from 'react-router-dom'
import './ShopStyle.css'

const Sidebar = () => {
  return (
    <div>
        <h2>SHOP</h2>
        <div className='shoplinks'>
        <div className='prdctlinks'>
        <Link to={'/Shop/AddProduct'} className='prdctlinks'>AddProduct</Link>
        </div>
        <div className='Stocklinks'>
        <Link to={'/Shop/AddStock'} className='Stocklinks'>AddStock</Link>
        </div>
        <div className='Stocklinks'>
        <Link to={'/Shop/Myprofile'} className='Stocklinks'>Myprofile</Link>
        </div>
        <div className='Stocklinks'>
        <Link to={'/Shop/Editprofile'} className='Stocklinks'>EditProfile</Link>
        </div>
        <div className='Stocklinks'>
        <Link to={'/Shop/Changepassword'} className='Stocklinks'>Changepassword</Link>
        </div>
        </div>
    </div>
  )
}

export default Sidebar