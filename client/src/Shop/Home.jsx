import React from 'react'
import './ShopStyle.css'
import shopHomeimg from './shopImages/sellonlineShop.jpg'

const Home = () => {
  return (
    <div className='homeDivShopPage'>
      <div style={{ width: "500px", marginLeft: "120px", marginTop: "100px", }}>
          <div className='ONLINEDiv' >SELL</div>
          <div className='ONLINEDiv'>ONLINE WITH</div>
          <div className='ONLINEDiv'>SHOP BAY.</div>
          </div>

          <div>
            <img src={shopHomeimg} alt="img" style={{marginTop:"60px"}}/>
          </div>
    </div>
  )
}

export default Home