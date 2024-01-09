import React from 'react'
import wishlistimage from './UserImages/wishlistprofile.jpg'
import { Link } from 'react-router-dom'
import myordericon from './UserImages/iconsMyorder.png'
import arrowpath from './UserImages/arrowpathwishlist.png'
import accountinfoicon from './UserImages/acountinfoicon.png'
import paymenticon from './UserImages/paymenticonwishlist.png'
import mystufficon from './UserImages/mystuff.png'
import logouticon from './UserImages/logout.jpg'
import profilebottomimg from './UserImages/profilepagebotttomimg.png'

const PersonalInfo = () => {
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


                    <div className='profileinfowishlist'>Profile Information</div>
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
                <div>
                    <div className='myprofileFullDiv'>
                        <div style={{ paddingBottom: "56px" }}>
                            <div class="_1cyhik"><span class="_1mHr1S">Personal Information</span>
                                <span class="oKZoMV">Edit</span></div>

                            <div class="_1TlPi6">

                                <div class="_1YVqbV">
                                    <div class="_1Jqgld">
                                        <input type="text" class="profileInputboxes" name="firstName" required="" autocomplete="name" tabindex="1" value="Abi" disabled="" />
                                    </div>
                                </div>

                                <div class="_1YVqbV">
                                    <div class="_1Jqgld">
                                        <input type="text" class="profileInputboxes" name="lastName" autocomplete="name" tabindex="2" value="Joy" disabled="" />
                                    </div>
                                </div>

                            </div>

                            <div className='genderHeadingtextDiv'>
                                Your Gender
                            </div>
                            <div className='profilegenderradiobtn'>

                                <input type="radio" class="_3DAmyP" name="gender" readonly="" id="Male" disabled="" />
                                <div style={{ marginLeft: "16px", marginRight: "32px", fontSize: "16px", fontFamily: "sans-serif", color: "#878787" }}>Male</div>
                                <input type="radio" class="_3DAmyP" name="gender" readonly="" id="Female" disabled=""></input>
                                <div style={{ marginLeft: "16px", fontSize: "16px", fontFamily: "sans-serif", color: "#878787" }}>Female</div>
                            </div>

                        </div>

                        <div style={{ paddingBottom: "46px" }}>
                            <div class="_1cyhik"><span class="_1mHr1S">Email Address</span>
                                <span class="oKZoMV">Edit</span></div>

                            <div class="_1YVqbV">
                                <div class="_1Jqgld">
                                    <input type="text" class="profileEmailInputboxes" name="email" autocomplete="email" required="" value="abijoy611@gmail.com" disabled="" />
                                </div>
                            </div>
                        </div>

                        <div style={{ paddingBottom: "46px" }}>
                            <div class="_1cyhik"><span class="_1mHr1S">Mobile Number</span>
                                <span class="oKZoMV">Edit</span></div>

                            <div class="_1YVqbV">
                                <div class="_1Jqgld">
                                    <input type="text" class="profileMobileInputboxes" name="mobileNumber" autocomplete="tel" required="" value="+919633867457" disabled="" />                            </div>
                            </div>
                        </div>

                        <div class="_2PTLbk">FAQs</div>

                        <div style={{paddingBottom:"24px"}}>
                            <h4 id="what-happens-when-i-update-my-email-address-or-mobile-number-">What happens when I update my email address (or mobile number)?</h4>
                            <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
                            <h4 id="when-will-my-flipkart-account-be-updated-with-the-new-email-address-or-mobile-number-">When will my Flipkart account be updated with the new email address (or mobile number)?</h4>
                            <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
                            <h4 id="what-happens-to-my-existing-flipkart-account-when-i-update-my-email-address-or-mobile-number-">What happens to my existing Flipkart account when I update my email address (or mobile number)?</h4>
                            <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
                            <h4 id="does-my-seller-account-get-affected-when-i-update-my-email-address-">Does my Seller account get affected when I update my email address?</h4>
                            <p style={{fontFamily:"sans-serif",fontSize:"14px"}}>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
                        </div>

                        <div style={{color:"#2874F0",fontFamily:"sans-serif",fontSize:"14px",fontWeight:"bold",
                        padding:"24px 0px 0px"                  
                    }}>Deactivate Account</div>

                    </div>
                    <img src={profilebottomimg} alt="img" style={{ width: "895.250px", height: "162.578px", backgroundColor: "#FFFFFF", marginLeft: "16px" }} />
                </div>


            </div>
        </div>
    )
}

export default PersonalInfo