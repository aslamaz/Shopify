import React from 'react'
import pixel7a from './UserImages/pixel7a.jpg'
import infoicon from './UserImages/infoicon.png'
import safetyimg from './UserImages/safetyimg.jpg'

const PageCart = () => {
    return (
        <div className='cartMaindiv'>
            <div>
                <div className='cartheadlinesdiv'>
                    <div className='headlines'>Flipkart</div>
                    <div className='headlines'>Grocery</div>
                </div>

                <div className='deliveryPinEnter'>
                    <div className='deliveryPinheadlinesText'> From saved Address</div>
                    <div className='deliveryPinheadlinesbtn'><button className='DeliveryPincodebtn'>Enter Delivery Pincode</button></div>
                </div>

                <div className='cartprdctSpecificationDiv'>
                    <div className='prdctSpecificationandImage'>
                        <div className='pixelImage'><img src={pixel7a} alt="img" style={{ width: "112px", height: "92px", objectFit: "contain" }} /></div>
                        <div className='pixel7aSpecifications'>
                            <div style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "16px"
                            }} >Google Pixel 7a (Sea, 128 GB)</div>

                            <div style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "14px", color: "#878787"
                            }} >8 GB RAM</div>

                            <div style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "12px", color: "#878787", marginTop: "8px"
                            }} >Seller:IndiFlashMart</div>

                            <div style={{ display: "flex", }}>

                                <del style={{ color: "#878787", fontSize: "14px", margin: "22px 10px 0px 0px", fontFamily: "Arial, Helvetica, sans-serif" }}>₹43,999</del>
                                <div style={{ fontSize: "18px bold", margin: "18px 8px 0px 0px", }}>₹37,999</div>
                                <div style={{ color: "#388E3C", fontSize: "14px", margin: "22px 12px 0px 0px" }}>13% Off</div>
                                <div style={{ color: "#388E3C", fontSize: "14px", margin: "22px 0px 0px 0px" }}>2 offers applied</div> <img src={infoicon} alt="img" style={{ width: "14px", height: "14px", objectFit: "contain", margin: "18px 0px 0px 0px" }} />
                            </div>

                            <div style={{
                                fontFamily: "Arial, Helvetica, sans-serif",
                                fontSize: "14px",
                            }} >+ ₹69 Secured Packaging Fee</div>

                        </div>

                        <div style={{
                            width: "242px",
                            height: "19.594px", display: "flex"
                        }}> Delivery by Sat Dec 16 | <del style={{ color: "#878787", marginRight: "5px", marginLeft: "3px" }}>₹49</del><div style={{ color: "#388E3C", width: "26px" }} >Free</div ></div>
                    </div>

                    <div className='quatityAndRemove'>
                        <button style={{ width: "28px", height: "28px", padding: "1px", borderRadius: "50%", border: "1px solid #e4e7ed" }}>-</button>
                        <div style={{ width: "46px", height: "28px", border: "1px solid #e4e7ed", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px", marginRight: "5px" }}>1</div>
                        <button style={{ width: "28px", height: "28px", padding: "1px", borderRadius: "50%", border: "1px solid #e4e7ed" }}>+</button>
                        <button style={{ fontSize: "16px", fontFamily: "sans-serif", marginLeft: "20px", marginRight: "10px", marginTop: "5px", border: "none", backgroundColor: "#FFFFFF" }}>SAVE FOR LATER</button>
                        <button style={{ fontSize: "16px", fontFamily: "sans-serif", marginLeft: "10px", marginRight: "10px", marginTop: "5px", border: "none", backgroundColor: "#FFFFFF" }}>REMOVE</button>
                    </div>
                </div>

                <div className='placeorderDiv'>
                    <button className='placeOrderbtn'>PLACE ORDER</button>
                </div>
            </div>

           
            <div className='orderSummary'>
            <span className='PricedetailsDiv'>PRICE DETAILS</span>
                        <div className='priceAndValue'>
                            <div className='orderSummarypricediv'>Price(2 items)</div>
                            <span className="orderSummaryValueediv">44000</span>
                        </div>

                        <div className='priceAndValue'>
                            <div className='orderSummarypricediv'>Discount</div>
                            <span className="orderSummarydiscountdiv">-₹6,001</span>
                        </div>

                        <div className='priceAndValue'>
                            <div className='orderSummarydeliverydiv'>Delivery Charges</div>
                            <span className="orderSummarydiscountdiv"><del style={{color:"#717478"}}>₹40</del>Free</span>
                        </div>

                        <div className='priceAndValue'>
                            <div className='packagingFeediv'>Secured Packaging Fee</div>
                            <span className="orderSummarydiscountdiv">₹69</span>
                        </div>

                        <div className='amountfulldiv'>
                        <div className='totalAmountdiv'>
                            <div className='amountTag'>Total Amount</div>
                            <div className='amount'>₹38,068</div>
                        </div>
                        </div>

                        <div className='_3s5O6i'>
                        <div style={{
                            color:"#388E3C",fontFamily:"sans-serif",fontSize:"16px",fontWeight:"500px"
                        }}>You will save ₹5,932 on this order</div>
                        </div>

                        <div class="_1RVm3P">
                          <div ><img src={safetyimg} alt="img"  className='safetyshieldimg'/></div>  
                         <div style={{marginLeft:"10px"}}> Safe and Secure Payments.Easy returns.100% Authentic products.</div></div>
            </div>
        </div>
    )
}

export default PageCart