import React from 'react'
import grocery from './UserImages/products.jpg'
import mobile from './UserImages/mobiles(1).jpg'
import fashion from './UserImages/fashion.jpg'
import electronics from './UserImages/electronics.jpg'
import home from './UserImages/home.jpg'
import apliences from './UserImages/aplliences.jpg'
import travel from './UserImages/travel.jpg'
import toys from './UserImages/toys.jpg'
import twowheelers from './UserImages/twowheeler.jpg'
import slide1 from './UserImages/slide1.jpg'
import slide2 from './UserImages/slide2.jpg'
import slide3 from './UserImages/slide3.png'
import printer from './UserImages/printer.jpg'
import usb from './UserImages/usb.jpg'
import camera from './UserImages/camera.jpg'
import sdcard from './UserImages/sdusb.jpg'
import keyboard from './UserImages/keyboard.jpg'
import flightadd from './UserImages/addflight.jpg'
import Arrowpath from './UserImages/rightArrowPath.png'
import gearcycle from './UserImages/gearcycle.jpg'
import electriccycle from './UserImages/electriccycle.jpg'
import gym from './UserImages/gym.jpg'
import yoga from './UserImages/yogamat.jpg'
import remotecar from './UserImages/remotecar.jpg'
import trycycle from './UserImages/ridions.jpg'
import { Link } from 'react-router-dom'



const Home = () => {
  return (
    <div>
      <div className='homemainDiv'>
        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={grocery} alt="img" className='productsimage' />


            <div className='GroceryUserlinks'>
              <button className="Grocery-dropbtn">Grocery</button>
            </div>

          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={mobile} alt="img" className='productsimage' />

            <button className="Mobile-dropbtn">Mobile</button>

          </div>
        </div>

        <div className='linkimage'>
          <div className='Grocery-dropdown'>
            <div className='imageDiv'>
              <img src={fashion} alt="img" className='productsimage' />


              <div className='GroceryUserlinks'>
                <button className="HeadprdctNamesFashion">Fashion</button>
              </div>

              <div className="productsdropdown-content">
                <div className='productHoverItems' >
                  <div style={{ marginLeft: "18px", width: "100%" }}>
                    <div className='prdctNameDiv' >Mens Top Wear</div>
                    <div className='prdctNameDiv' >Womens Western</div>
                    <div className='prdctNameDiv'>Men Footwear</div>
                    <div className='prdctNameDiv'>Womens Footwear</div>
                    <div className='prdctNameDiv'>Watches & Accessories </div>
                    <div className='prdctNameDiv'>Kids </div>
                    <div className='prdctNameDiv'>Essentials </div>
                    <div className='prdctNameDiv'>Winter </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={electronics} alt="img" className='productsimage' />
            <div className='Grocery-dropdown'>

              <div className='GroceryUserlinks'>
                <button className="HeadprdctNamesElectronics">Electronics</button>
              </div>

              <div className="productsdropdown-content">
                <div className='productHoverItems' >
                  <div style={{ marginLeft: "18px", width: "100%" }}>
                    <div className='prdctNameDiv' >Audio</div>
                    <div className='prdctNameDiv' >Electronics GST Store</div>
                    <div className='prdctNameDiv'>Camera & Accessories</div>
                    <div className='prdctNameDiv'>Computer Peripherals</div>
                    <div className='prdctNameDiv'>Gaming</div>
                    <div className='prdctNameDiv'>Mobile Accessories</div>
                    <div className='prdctNameDiv'>Smart Wearables</div>
                    <div className='prdctNameDiv'>Storage </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={home} alt="img" className='productsimage' />
            <div className='Grocery-dropdown'>

              <div className='GroceryUserlinks'>
                <button className="HeadprdctNamesHomeFurniture">Home&Furniture</button>
              </div>

              <div className="productsdropdown-content">
                <div className='productHoverItems' >
                  <div style={{ marginLeft: "18px", width: "100%" }}>
                    <div className='prdctNameDiv' >Home Furnishings</div>
                    <div className='prdctNameDiv' >furniture Studio</div>
                    <div className='prdctNameDiv'>living Room Furniture</div>
                    <div className='prdctNameDiv'>Kitchen & Dining</div>
                    <div className='prdctNameDiv'>Home Decor </div>
                    <div className='prdctNameDiv'>Lightings & Electricals </div>
                    <div className='prdctNameDiv'>Cleaning & And Bath </div>
                    <div className='prdctNameDiv'>Tools & Utility </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={apliences} alt="img" className='productsimage' />
            <span className='HeadprdctNamesAppliences'>Appliences</span>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={toys} alt="img" className='productsimage' />
            <div className='Grocery-dropdown'>

              <div className='GroceryUserlinks'>
                <button className="HeadprdctNamesTOYS">TOYS</button>
              </div>

              <div className="productsdropdown-content">
                <div className='productHoverItems' >
                  <div style={{ marginLeft: "18px", width: "100%" }}>
                    <div className='prdctNameDiv' >Beauty & Personal Care</div>
                    <div className='prdctNameDiv' >furniture Studio</div>
                    <div className='prdctNameDiv'>living Room Furniture</div>
                    <div className='prdctNameDiv'>Kitchen & Dining</div>
                    <div className='prdctNameDiv'>Home Decor </div>
                    <div className='prdctNameDiv'>Lightings & Electricals </div>
                    <div className='prdctNameDiv'>Cleaning & And Bath </div>
                    <div className='prdctNameDiv'>Tools & Utility </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={twowheelers} alt="img" className='productsimage' />
            <div className='Grocery-dropdown'>

              <div className='GroceryUserlinks'>
                <button className="HeadprdctNamesTwoHwheelers">TwoHwheelers</button>
              </div>

              <div className="productsdropdown-content">
                <div className='productHoverItems' >
                  <div style={{ marginLeft: "18px", width: "100%" }}>
                    <div className='prdctNameDiv' >Petrol Vehicle</div>
                    <div className='prdctNameDiv' >Electric Vehicle </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='linkimage'>
          <div className='imageDiv'>
            <img src={travel} alt="img" className='productsimage' />
            <span className='HeadprdctNamesTRAVEL'>TRAVEL</span>
          </div>
        </div>

      </div>

      <div className='scrollingimage'>
        <marquee speed="500" behavior="alternate" scrollamount="10">
          <img src={slide1} alt="img" className='slideimage' />
          <img src={slide2} alt="img" className='slideimage' />
          <img src={slide3} alt="img" className='slideimage' />
          <img src={slide3} alt="img" className='slideimage' />

        </marquee>
      </div>

      <div className='productsection'>
        <div className='headandprdctimages'>
          <div className='prdctheading'>
            <div style={{
              fontSize: "24px",
              fontFamily: "inter_semi_bold,fallback-inter_semi_bold"
            }}><b>Best Of Electronics</b></div>
            <div className='arrowlogodiv'><img src={Arrowpath} alt="img" className='arrowpath' /></div>
          </div>

          <div className='electronicprdcts'>
            <div className='priceandimage'>
              <div className='imagediv'>
                <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={printer} alt="img" className='eletronicsprdctimages' /></Link>
              </div>
              <div className='pricenamediv'>
                <div style={{ display: "flex", justifyContent: "center", }}>Printers</div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}>From $3999</div>
              </div>

            </div>
            <div className='priceandimage'>
              <div className='imagediv'>
                <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={usb} alt="img" className='eletronicsprdctimages' /></Link>

              </div>
              <div className='pricenamediv'>
                <div style={{ display: "flex", justifyContent: "center", }}>USB Gadjets</div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}>From $179</div>
              </div>
            </div>
            <div className='priceandimage'>
              <div className='imagediv'>
                <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={camera} alt="img" className='eletronicsprdctimages' /></Link>
              </div>
              <div className='pricenamediv'>
                <div style={{ display: "flex", justifyContent: "center", }}>Top Mirrorless Camera</div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}>Shop Now!</div>
              </div>
            </div>
            <div className='priceandimage'>
              <div className='imagediv'>
                <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={sdcard} alt="img" className='eletronicsprdctimages' /></Link>
              </div>
              <div className='pricenamediv'>
                <div style={{ display: "flex", justifyContent: "center", }}>USB & Pendrives</div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}>From $289</div>
              </div>
            </div>
            <div className='priceandimage'>
              <div className='imagediv'>
                <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={keyboard} alt="img" className='eletronicsprdctimages' /></Link>
              </div>
              <div className='pricenamediv'>
                <div style={{ display: "flex", justifyContent: "center", }}>Keyboard & Mouse</div>
                <div style={{ display: "flex", justifyContent: "center", fontSize: "20px" }}>From $169</div>
              </div>
            </div>
          </div>
        </div>
        <div className='add'>
          <img src={flightadd} alt="img" className='addflight' />
        </div>
      </div>

      <div className='bueatytoysmore'>
        <div className='bueatytoysprdctheading'>
          <div style={{
            fontSize: "24px",
            fontFamily: "inter_semi_bold,fallback-inter_semi_bold"
          }}><b>Bueaty,Food,Toys & More</b></div>
          <div className='arrowlogodiv'><img src={Arrowpath} alt="img" className='arrowpath' /></div>
        </div>

        <div className='bueatytoysprdct'>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={gearcycle} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Geared Cycle</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>Upto 70% Off</b></div>
            </div>

          </div>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={electriccycle} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Electric Cycle</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>Upto 40% off</b></div>
            </div>
          </div>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={remotecar} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Remote Control Toys</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>Upto 80% Off</b></div>
            </div>
          </div>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={gym} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Gym Essentials</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>From $289</b></div>
            </div>
          </div>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={yoga} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Yoga Mat</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>From $169</b></div>
            </div>
          </div>
          <div className='priceandimage'>
            <div className='imagediv'>
              <Link to={'/User/Relatedproducts'} className='Userlinks'><img src={trycycle} alt="img" className='eletronicsprdctimages' /></Link>
            </div>
            <div className='pricenamediv'>
              <div style={{ display: "flex", justifyContent: "center", }}>Trycycle & Rideons</div>
              <div style={{ display: "flex", justifyContent: "center", fontSize: "18px" }}><b>UpTo 70% Off</b></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home