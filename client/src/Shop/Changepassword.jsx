import React from 'react'
import './ShopStyle.css'

const Changepassword = () => {
  return (
    <div className='changepsswrd'>
        <div className='changepsswrdcontainer'>
                <h2 style={{ color: "white" }}>CHANGE PASSWORD</h2>
                <div className='changepsswrdArea'>
                    CurrentPassword:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "400px", height: "30px",color:"white" }} />
                </div>

                <div className='changepsswrdArea' >
                    NewPassword:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "400px", height: "30px",color:"white" }} />
                </div>

                <div className='changepsswrdArea'>
                    RE-Password:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "400px", height: "30px",color:"white" }} />
                </div>

                <div className='editbtn'>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            </div>
    </div>
  )
}

export default Changepassword