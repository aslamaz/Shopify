import React, { useEffect, useState } from 'react'
import sdcardimage from './UserImages/sdcardAdd.png'
// import memorycard from './UserImages/memmorycard.jpg'
import wishlistIcon from './UserImages/wishlistIcon.svg'
// import wishlistColorIcon from './UserImages/wishlistColorIcon.svg'
import assuredlogo from './UserImages/flipkartAssuredlogo.png'
import ratingstar from './UserImages/ratingstar.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Relatedproducts = () => {

  const { id } = useParams();
  const Id = sessionStorage.getItem("customerId");


  const [showPrdcts, setShowPrdct] = useState([]);

  const Wishlist = (prdctId) =>{
    const data = {
      productId : prdctId,
       customerId : Id
    }
    axios.post(`http://localhost:5000/Wishlist`,data).then((response)=>{
      console.log(response.data);
    })
}


  useEffect(() => {
    axios.get(`http://localhost:5000/productWithSubCategory/${id}`).then((response) => {
      console.log(response.data);
      const data = response.data;
      setShowPrdct(data);
    })
  }, [])


  const truncateText = (text, maxWords) => {
    const words = text.split(' ');
    if (words.length <= maxWords) {
      return text;
    }
    return words.slice(0, maxWords).join(' ');
  }

  return (
    <div className='relatedProductsMainDiv'>
      <div className='hoverPrdctNames'>
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

      <div style={{ display: "flex" }}>
        <div>
          <div className='relatedPrdctsSideSection'>

            <div className='relatedcardimg'>
              <img src={sdcardimage} alt="img" style={{ width: "267px", height: "144px", objectFit: "contain" }} />
              <hr></hr>
            </div>
            <div className='imgdetails'>

              <div style={{ padding: "10px 0px 0px 15px", fontSize: "18px", fontFamily: "Roboto,Arial,sans-serif" }}>Top Selling External SSD</div>
              <div style={{ padding: "0px 0px 0px 15px", fontSize: "14px" }}>Grab Now Upto 60% Off</div>
            </div>

            <div className='filterSection'>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ fontSize: "18px", fontFamily: "Roboto,Arial,sans-serif" }}>Filters</div>
                <div style={{ fontSize: "12px", fontFamily: "Roboto,Arial,sans-serif", fontWeight: "500", color: "#2874f0" }}>CLEAR ALL</div>
              </div>

              <div className='pricefilter'>
                <div className="_151IuQ">✕ Min-₹60000+</div>
              </div>
            </div>

            <div className='relatedcategory'>
              <div style={{ fontFamily: "Roboto,Arial,sans-serif", fontSize: "12px", fontWeight: "500" }}><b>CATEGORIES</b></div>
              <div >
                <ul style={{ listStyleType: "square", color: "black" }}>
                  <li>Computers </li>
                  <li>Storage</li>
                </ul>
              </div>
            </div>

            <div className='availabilities'>
              <select name="brand" id="dropdownlists">

                <option value="" selected>BRAND</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="customerRating" id="dropdownlists">

                <option value="" selected>CUSTOMER RATING</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="Discount" id="dropdownlists">

                <option value="" selected>DISCOUNT</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="gst" id="dropdownlists">

                <option value="" selected>GST INVOICE AVAILABLE</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>AVAILABILITY</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>OFFERS</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>CAPACITY</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>TYPES</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>DEVICE TYPE</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>INTERFACE TYPE</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

            <div className='availabilities'>
              <select name="avilability" id="dropdownlists">

                <option value="" selected>FORM FACTOR</option>
                <option value="">PNY</option>
                <option value="">Sandisk</option>
                <option value="" >HP</option>
                <option value="" >WD</option>
                <option value="" >Seagate</option>
                <option value="" >2fortherroad</option>
              </select>
            </div>

          </div>
        </div>

        <div className='productShowing'>
          <div className='headandtitlesdiv'>
            <div style={{
              fontSize: "12px",
              color: "#878787",
              fontFamily: "Roboto,Arial,sans-serif"
            }}>
              Home - Computers - Storage
            </div>
            <div style={{
              fontSize: "12px",
              color: "#2874f0",
              fontFamily: "Roboto,Arial,sans-serif",
              marginTop: "12px"
            }}>
              Computers,Lexar storage,Crucial Storage,Toshiba Storage,SSD,Sandisk Storage,HHD,Pendrives,SSD Storage,Memmory cards
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "10px", }}>
              <div style={{
                fontSize: "18px",
                color: "#black",
                fontFamily: "Roboto,Arial,sans-serif",
                marginRight: "10px"
              }}>printers</div>

              <div style={{
                fontSize: "12px",
                color: "#878787",
                fontFamily: "Roboto,Arial,sans-serif"
              }}>(Showing 1 - 37 products of 37 products)</div>
            </div>

            <div style={{ display: "flex", marginTop: "10px" }}>
              <div className='sortingProducts'>
                Sort by
              </div>
              <div className='sortingProducts'>
                Popularity
              </div>
              <div className='sortingProducts'>
                Price--Low To High
              </div>
              <div className='sortingProducts'>
                Price--High To Low
              </div>
              <div className='sortingProducts'>
                Newest First
              </div>
            </div>
          </div>

          <div className='Allprdctcards'>
            {showPrdcts.map((productsdtls, key) => (
                  


              <div className='prdctcards'>
                {
                  console.log(productsdtls)
                }

                <div className='wishlistIconDiv'>
                  <div className='wishlistIconDiv2'>
                   <button onClick={()=> Wishlist(productsdtls._id)}>
                     <img src={wishlistIcon} alt="img"  />
                    </button>
                  </div>
                </div>

                <div className='imgdiv'>
                  <Link to={`/User/ProductDetails/${productsdtls._id
                    }`} className='Userlinks'><img src={productsdtls.prdctimgsrc} alt="img" className='imagestyling' /></Link>
                </div>

                <div style={{ padding: "10px" }}>

                  <div style={{ fontSize: "14px" }}>{truncateText(productsdtls.ProductDescription, 7) + '...'}</div>

                  <div style={{
                    fontSize: "12px",
                    color: "#878787",
                    fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                  }}>with adapter</div>

                  <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                    <div style={{
                      width: "39.47px",
                      height: "19px",
                      backgroundColor: "green",
                      color: "white",
                      padding: "2px 4px 2px 6px",
                      borderRadius: "3px",
                      marginRight: "5px"
                    }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                    <div style={{
                      width: "70px", height: "17", padding: "0px 0px 0px 8px",
                      backgroundColor: "#878787", marginRight: "5px",
                    }}>(1,02,116)</div>
                    <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                  </div>
                </div>
              </div>

            ))}

            {/* <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>

            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>

            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className='Allprdctcards'>
            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>

            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'> <img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>

            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>

            <div className='prdctcards'>
              <div className='imgdiv'>
                <Link to={'/User/ProductDetails'} className='Userlinks'><img src={memorycard} alt="img" className='imagestyling' /></Link>
              </div>

              <div style={{ padding: "10px" }}>

                <div style={{ fontSize: "14px" }}>SAMSUNG Evo Plus 256 GB MicroSDXC Class 10 130 MB/s  Me...</div>

                <div style={{
                  fontSize: "12px",
                  color: "#878787",
                  fontFamily: "Roboto,Arial,sans-serif", marginTop: "5px"
                }}>with adapter</div>

                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                  <div style={{
                    width: "39.47px",
                    height: "19px",
                    backgroundColor: "green",
                    color: "white",
                    padding: "2px 4px 2px 6px",
                    borderRadius: "3px",
                    marginRight: "5px"
                  }}>4.4 <img src={ratingstar} alt="img" className='ratingstar' /></div>

                  <div style={{
                    width: "70px", height: "17", padding: "0px 0px 0px 8px",
                    backgroundColor: "#878787", marginRight: "5px",
                  }}>(1,02,116)</div>
                  <div><img src={assuredlogo} alt="img" className='flipkartAssuredlogo' /></div>
                </div>
              </div>
            </div>
          </div> */}
        </div>



      </div>
    </div>
  )
}

export default Relatedproducts
