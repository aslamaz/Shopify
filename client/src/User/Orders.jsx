import React, { useEffect, useState } from 'react'
import searchicon from './UserImages/searchiconMyorder.svg'
import boatheadset from './UserImages/headphoneimg.jpg'
import greencircle from './UserImages/greencircle.png'
import bluestar from './UserImages/Blue_star.svg'
import { Link } from 'react-router-dom'
import bag from './UserImages/bag.jpeg'
import axios from 'axios'

const Orders = () => {
    const Id = sessionStorage.getItem("customerId");
    const [showOrderedProduct, setShowOrderedProduct] = useState([]);

    const addProductToMyorder = () => {
        axios.get(`http://localhost:5000/cartWithMyorder/${Id}`).then((response) => {
            console.log(response.data);
            const data = response.data;
            setShowOrderedProduct(data);




        })
    }

    useEffect(() => {
        addProductToMyorder();
    }, [])

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



            <div className='myorderMaindiv'>





                <div className='MyordereditemListDiv'>
                    <div style={{ display: "flex" }}>

                        <input type="text" class="_1uMrhc" placeholder="Search your orders here" value=""></input>
                        <button class="_2KpZ6l"><img src={searchicon} alt="img" style={{ width: "16px", height: "16px", margin: "0px 6px 0px 0px", }} /> <span>Search Orders</span></button>
                    </div>
                        {showOrderedProduct.map((orderedProducts, key) => (
                            
                            
                            <Link to={`/User/Deliverydetails/${orderedProducts.productId._id}`} className='Userlinks'>
                            <div className='orderedItemsDetailsDiv'>
                                <div style={{ display: "flex" }}>
                                    <div style={{ width: "508.500px", height: "75px", display: "flex" }}>
                                        <div className='MyorderImage'>
                                            <img src={orderedProducts.productId.prdctimgsrc} alt="img" style={{ width: "75px", height: "75px", objectFit: "contain", margin: "0px 8.781", marginLeft: "26px", marginRight: "26px" }} />
                                        </div>
                                        <div style={{ width: "338.953", height: "75px" }}>
                                            <span class="rowtextDetails">{orderedProducts.productId.ProductDescription}...</span>

                                        </div>
                                    </div>

                                    <div class="col-2-12">{orderedProducts.productId.productRate}</div>

                                    <div style={{ width: "336.953", height: "85.766px" }}>
                                        <img src={greencircle} alt="img" style={{ width: "10px", height: "10px", margin: "0px 8px 0px 0px" }} />
                                        <span class="AO0UbU">Delivered on Mar 30, 2022</span>
                                        <div class="_30gI7w">Your item has been delivered</div>
                                        <div style={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
                                            <img src={bluestar} alt="img" style={{ width: "18px", height: "21.375", margin: "0px 8px 0px 4px" }} />
                                            <div style={{ fontFamily: "sans-serif" }}><Link style={{ textDecoration: "none", color: "blue" }}> Rate & Review Product</Link></div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                    </Link>
                        ))}

                    {/* <div className='orderedItemsDetailsDiv'>
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


                    </div> */}
                </div>





            </div>

        </div>
    )
}

export default Orders


