import React from 'react'
import './ShopStyle.css'

const Editprofile = () => {
    return (
        <div className='Editprofile'>
            <div className='Editprofilecontainer'>
                <h2 style={{ color: "white" }}>Edit Profile</h2>
                <div className='profileArea'>
                    Name:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "350px", height: "30px",color:"white" }} />
                </div>

                <div className='profileArea' >
                    Email:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "350px", height: "30px",color:"white" }} />
                </div>

                <div className='profileArea'>
                    Contact:
                    <input type="text" style={{ background: "transparent", border: "1px solid white", borderRadius: "5px", width: "350px", height: "30px",color:"white" }} />
                </div>

                <div className='editbtn'>
                    <button>Submit</button>
                    <button>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default Editprofile