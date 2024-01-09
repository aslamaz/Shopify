import React from 'react'
import wishlistimage from './UserImages/wishlistprofile.jpg'
import { Link } from 'react-router-dom'
import myordericon from './UserImages/iconsMyorder.png'
import arrowpath from './UserImages/arrowpathwishlist.png'
import accountinfoicon from './UserImages/acountinfoicon.png'
import paymenticon from './UserImages/paymenticonwishlist.png'
import mystufficon from './UserImages/mystuff.png'
import logouticon from './UserImages/logout.jpg'
import memmoryCard from './UserImages/memmorycard.jpg'
import ratingstar from './UserImages/ratingstar.png'
import assuredlogo from './UserImages/flipkartAssuredlogo.png'
import headphoneimg from './UserImages/headphoneimg.jpg'


const WishList = () => {
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


            <div className='wishlistMainDiv'>
                <div >
                    <div className='welcomeDiv'>
                        <div><img src={wishlistimage} alt="img" className='wishlistimage' /></div>
                        <div className='textDivwishlist'>
                            <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>Hello,</div>
                            <div style={{ fontFamily: "sans-serif", fontSize: "16px", paddingTop: "5px", fontWeight: "bold" }}>Abi Joy</div>
                        </div>
                    </div>

                    <div className='MyordersFullDiv'>
                        <div className='MyordersDiv'>
                            <div><img src={myordericon} alt="img" className='myordericon' /></div>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "450px" }}>
                                <div><Link to={'/User/Orders'} className='myOrderlink'>MY ORDERS</Link></div>
                                <div><img src={arrowpath} alt="img" className='arrowpath' /></div>
                            </div>
                        </div>
                    </div>

                    <div className='accountinfowishlist'>
                        <div><img src={accountinfoicon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>ACCOUNT INFORMATION</div>
                    </div>


                    <Link to={'/User/PersonalInfo'} className='Userlinks'><div className='profileinfowishlist'>Profile Information</div></Link>
                    <div className='profileinfowishlist'>Manage Addresses</div>
                    <div className='paninfowishlist'>PAN Card Information</div>

                    <div className='Paymentswishlist'>
                        <div><img src={paymenticon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>PAYMENTS</div>
                    </div>

                    <div style={{ display: "flex", }}>
                        <div className='profileinfowishlist'>Gift Cards <span class="PKhkts">₹0</span></div>
                    </div>
                    <div className='profileinfowishlist'>Saved UPI</div>
                    <div className='paninfowishlist'>Saved Cards</div>

                    <div className='Mystuffwishlist'>
                        <div><img src={mystufficon} alt="img" className='accountinfoicon' /></div>
                        <div className='textaccountinfo'>MY STUFF</div>
                    </div>
                    <div className='profileinfowishlist'>My Coupons</div>
                    <div className='profileinfowishlist'>My Reviews & Ratings </div>
                    <div className='Notificationsinfowishlist'>All Notifications  </div>
                    <div className='infowishlist'><Link to={'/User/WishList'} className='infowishlistlink'>My WishList</Link>  </div>

                    <div className='logountdivwishlistMain'>
                        <div className='logountdivwishlist'>
                            <div><img src={logouticon} alt="img" className='logouticon' /></div>
                            <div style={{ color: "#878787", fontFamily: "sans-serif", fontSize: "16px", paddingLeft: "20px", fontWeight: "bold", }}>LOGOUT</div>
                        </div>
                    </div>

                    <div className='frequentvisitFullDiv'>
                        <div class="_3dhhtB">Frequently Visited:</div>
                        <div class="OrderandHelpDiv">
                            <a class="_2YCxI1" href="/account/orders">Track Order</a>
                            <a class="_2YCxI1" href="/helpcentre">Help Center</a>
                        </div>
                    </div>
                </div>

                <div className='wishlistitemsDiv'>
                    <div className='wishlistitemshead'>My Wishlist (2)</div>
                    <Link to={"/User/ProductDetails"} className='AddedItemsdivLinks'> 
                        <div className='AddedItemsdiv'>

                            <div className='headphoneimgdiv'><img src={memmoryCard} alt="img" className='headphoneimg' /></div>
                            <div>
                                <div style={{
                                    fontSize: "15px",
                                    color: "#black",
                                    fontFamily: "Roboto,Arial,sans-serif",
                                    width: "605.17px", height: "15px",
                                    paddingBottom: "5px"
                                }}> SanDisk Ultra 128 GB MicroSDXC Class 10 140 MB/s Memory Card</div>

                                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                                    <div style={{
                                        width: "35.47px",
                                        height: "15px",
                                        backgroundColor: "green",
                                        color: "white",
                                        padding: "2px 4px 2px 6px",
                                        borderRadius: "3px",
                                        marginRight: "10px",
                                        display: "flex",
                                        justifyContent: 'center',
                                        alignItems: "center",
                                        fontFamily: "Roboto,Arial,sans-serif"
                                    }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                                    <div style={{
                                        color: "#878787",
                                        marginRight: "10px",
                                        fontFamily: "Roboto,Arial,sans-serif",
                                        fontSize: "14px"
                                    }}>40,193 Ratings & 3,077 Reviews</div>
                                    <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                                </div>

                                <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>

                                    <div style={{ fontFamily: "Roboto,Arial,sans-serif", fontSize: "22px" }}>₹876</div>

                                    <div style={{ fontSize: "14px", marginLeft: "12px", color: "#878787", fontFamily: "Roboto,Arial,sans-serif" }}><del>₹1800</del></div>
                                    <div style={{ fontSize: "13px", marginLeft: "12px", color: "#388e3c", letterSpacing: "1px", fontFamily: "Roboto,Arial,sans-serif" }}>51%off</div>
                                </div>

                            </div>
                        </div>
                    </Link>

                    <div className='AddedItemsdiv'>

                        <div className='headphoneimgdiv'><img src={headphoneimg} alt="img" className='headphoneimg' /></div>
                        <div>
                            <div style={{
                                fontSize: "15px",
                                color: "#black",
                                fontFamily: "Roboto,Arial,sans-serif",
                                width: "605.17px", height: "15px",
                                paddingBottom: "5px"
                            }}> boAt Rockerz 450 with Upto15 Hours Playback Bluetooth Headset</div>

                            <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                                <div style={{
                                    width: "35.47px",
                                    height: "15px",
                                    backgroundColor: "green",
                                    color: "white",
                                    padding: "2px 4px 2px 6px",
                                    borderRadius: "3px",
                                    marginRight: "10px",
                                    display: "flex",
                                    justifyContent: 'center',
                                    alignItems: "center",
                                    fontFamily: "Roboto,Arial,sans-serif"
                                }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                                <div style={{
                                    color: "#878787",
                                    marginRight: "10px",
                                    fontFamily: "Roboto,Arial,sans-serif",
                                    fontSize: "14px"
                                }}>(3,45,542)</div>
                                <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                            </div>

                            <div style={{ display: "flex", alignItems: "center", marginTop: "25px" }}>

                                <div style={{ fontFamily: "Roboto,Arial,sans-serif", fontSize: "22px" }}>₹1499</div>

                                <div style={{ fontSize: "14px", marginLeft: "12px", color: "#878787", fontFamily: "Roboto,Arial,sans-serif" }}><del>₹3,990</del></div>
                                <div style={{ fontSize: "13px", marginLeft: "12px", color: "#388e3c", letterSpacing: "1px", fontFamily: "Roboto,Arial,sans-serif" }}>62%off</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WishList