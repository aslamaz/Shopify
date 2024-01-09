import React from 'react'
import Profilelogo from './profile-icon.jpg'
import './ShopStyle.css'

const Myprofile = () => {
  return (
    <div className='profileDiv'>
        <div className='profilecontainer'>
            <h2 style={{color:"white"}}>MY PROFILE</h2>
            <div className='img'><img src={Profilelogo} alt="img" style={{
                height:"100px",
                width:"100px",
                borderRadius:"50%",
                display:"flex",
                marginLeft:"70px"
            }}/></div>

            <div className='profileArea'>
            Name:
            
            </div>
            
            <div className='profileArea' > 
                Email:
                
            </div>

            <div className='profileArea'>
                Contact:
                
            </div>

           
            
        </div>
    </div>
  )
}

export default Myprofile