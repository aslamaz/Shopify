import React from 'react'
import searchicon from './UserImages/searchiconMyorder.jpg'
import boatheadset from './UserImages/headphoneimg.jpg'
import greencircle from './UserImages/greencircle.png'
import bluestar from './UserImages/Blue_star.svg'
import { Link } from 'react-router-dom'
import bag from './UserImages/bag.jpeg'

const Orders = () => {
    return (
        <div>
            <div className='productDetailsPagehoverPrdctNames'>
                <span className='spanRelatedPrdctNames'>Electronics</span>
                <span className='spanRelatedPrdctNames'>TVs & Appliences</span>
                <span className='spanRelatedPrdctNames'>Men</span>
                <span className='spanRelatedPrdctNames'>Women</span>
                <span className='spanRelatedPrdctNames'>Baby & Kids</span>
                <span className='spanRelatedPrdctNames'>Home & Furniture</span>
                <span className='spanRelatedPrdctNames'>Sports,Books&More</span>
                <span className='spanRelatedPrdctNames'>Flights</span>
                <span className='spanRelatedPrdctNames'>Offer Zone</span>
            </div>


            <div className='pagePathsDiv'>
                <div style={{ fontSize: "12px", fontFamily: "sans-serif", color: "#878787", paddingLeft: "8px" }}>Home - </div>
                <div style={{ fontSize: "12px", fontFamily: "sans-serif", color: "#878787", paddingLeft: "8px" }}>My Account - </div>
                <div style={{ fontSize: "12px", fontFamily: "sans-serif", color: "#878787", paddingLeft: "8px" }}>My Orders</div>
            </div>
            <div className='myorderMaindiv'>
                <div>


                    <div className='myOrderFilterDiv'>
                        <div style={{ fontSize: "20px", fontFamily: "Arial, Helvetica, sans-serif", color: "#272727", fontWeight: "550" }}>Filters</div>
                    </div>

                    <div className='orderStatusDiv'>
                        <div style={{
                            fontweight: "900",
                            fontsize: "14px",
                            textTransform: "capitalize",
                            padding: "8px 0",
                            fontFamily: "Arial, Helvetica, sans-serif"
                        }}>
                            ORDER STATUS
                        </div>
                        <div className='statusCheckBoxDiv'>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >On the way</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "12px", marginLeft: "10px" }} >Delivered</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "12px", marginLeft: "10px" }} >Cancelled</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >Returned</div>
                            </div>
                        </div>
                    </div>

                    <div className='orderTimeDiv'>
                        <div style={{
                            fontweight: "900",
                            fontsize: "14px",
                            textTransform: "capitalize",
                            padding: "8px 0",
                            fontFamily: "Arial, Helvetica, sans-serif"
                        }}>
                            ORDER TIME
                        </div>
                        <div className='statusCheckBoxDiv'>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >Last 30 days</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >2023</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >2022</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >2021</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >2020</div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", margin: " 0px 0px 12px" }}>
                                <input type="checkbox" style={{ border: "1.4px solid", color: " #c2c2c2" }}></input>
                                <div style={{ fontFamily: "Arial, Helvetica, sans-serif", fontsize: "10px", marginLeft: "10px" }} >Older</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='MyordereditemListDiv'>
                    <input type="text" class="_1uMrhc" placeholder="Search your orders here" value=""></input>
                    <button class="_2KpZ6l"><img src={searchicon} alt="img" style={{ width: "16px", height: "16px", margin: "0px 6px 0px 0px", }} /> <span>Search Orders</span></button>

                    <div className='orderedItemsDetailsDiv'>
                        <div style={{ display: "flex" }}>
                            <div className='MyorderImage'>
                                <img src={boatheadset} alt="img" style={{ width: "75px", height: "75px", objectFit: "contain", margin: "0px 8.781", marginLeft: "26px" }} />
                            </div>
                            <div style={{ width: "336.953", height: "75px" }}>
                                <span class="rowtextDetails">boAt Rockerz 450 with Upto 15 Hours Play...</span>
                                <div style={{ color: "#878787", fontsize: "12px", marginTop: "10px" }}>color:Biege</div>
                            </div>
                            <div class="col-2-12">₹1,199</div>

                            <div style={{ width: "336.953", height: "85.766px" }}>
                                <img src={greencircle} alt="img" style={{ width: "10px", height: "10px", margin: "0px 8px 0px 0px" }} />
                                <span class="AO0UbU">Delivered on Mar 30, 2022</span>
                                <div class="_30gI7w">Your item has been delivered</div>
                                <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                                    <img src={bluestar} alt="img" style={{ width: "18px", height: "21.375", margin: "0px 8px 0px 2px" }} />
                                    <div style={{ fontFamily: "sans-serif" }}><Link style={{ textDecoration: "none", color: "blue" }}> Rate & Review Product</Link></div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='orderedItemsDetailsDiv'>
                        <div style={{ display: "flex" }}>
                            <div style={{ display: "flex", width: "505.5px", height: "75px" }}>
                                <div className='MyorderImage'>
                                    <img src={bag} alt="img" style={{ width: "75px", height: "75px", objectFit: "contain", margin: "0px 8.781", marginLeft: "26px" }} />
                                </div>
                                <div style={{ width: "336.953", height: "75px" }}>
                                    <span class="rowtextDetails">Billion HiStorage 30 L Backpack...</span>
                                    <div style={{ color: "#878787", fontsize: "12px", marginTop: "10px" }}>color:Grey</div>
                                </div>
                                <div class="col-2-12">₹599</div>
                            </div>

                            <div style={{ width: "336.953", height: "85.766px" }}>
                                <img src={greencircle} alt="img" style={{ width: "10px", height: "10px", margin: "0px 8px 0px 0px" }} />
                                <span class="AO0UbU">Delivered on Dec 27, 2023</span>
                                <div class="_30gI7w">Your item has been delivered</div>
                                <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                                    <img src={bluestar} alt="img" style={{ width: "18px", height: "21.375", margin: "0px 8px 0px 2px" }} />
                                    <div style={{ fontFamily: "sans-serif" }}><Link style={{ textDecoration: "none", color: "blue" }}> Rate & Review Product</Link></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>





            </div>

        </div>
    )
}

export default Orders


