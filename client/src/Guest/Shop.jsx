import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Shop = () => {
  const [ShopName, setShopName] = useState('');
  const [shopContact, setShopContact] = useState('');
  const [Email, setEmail] = useState('');
  const [Address, setaddress] = useState('');
  const [District, setDistrict] = useState('');
  const [showDistrict, setShowDitrict] = useState([]);
  const [showPlace, setShowPlace] = useState([]);
  const [Place, setPlace] = useState('');
  const [Photo, setPhoto] = useState([]);
  const [Proof, setProof] = useState([]);
  const [Password, setPassword] = useState('');



  const insertShopData = () => {

    const frm = new FormData();
    frm.append("shopName", ShopName);
    frm.append("shopEmail", Email);
    frm.append("ShopContact", shopContact);
    frm.append("shopAddress", Address);
    frm.append("placeId", Place);
    frm.append("shopPhoto",Photo);
    frm.append("shopProof",Proof);

    frm.append("shopPassword", Password);

    axios.post('http://localhost:5000/Shop', frm).then((response) => {
      console.log(response.data);

    })
  }

  const getDistrictwithPlace = (id) => {
    axios.get(`http://localhost:5000/districtWithPlaces/${id}`).then((response) => {
      console.log(response.data);
      const data = response.data;
      setShowPlace(data);
     
    })
  }

  const fetchDistricts = () =>{
    axios.get('http://localhost:5000/GetDistrict').then((response)=>{
      const data = response.data;
      setShowDitrict(data);
    })
  }

  useEffect(()=>{
    fetchDistricts()
  },[])

  return (
    <div className='shopmaindiv'>
      <div className='ShopContainer'>
        <div style={{
          marginBottom: "30px"
        }}><h2>SHOPPING PAGE</h2></div>

        <div className='inputboxdiv'>

          <div class="floating-label-group">
            <input type="text" id="fnameGuest" class="form-control" value={ShopName} autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setShopName(event.target.value)} />
            <label class="floating-label">ShopName...</label>
          </div>

          <div class="floating-label-group">
            <input type="text" id="LnameGuest" class="form-control" value={Email} autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setEmail(event.target.value)} />
            <label class="floating-label">Email...</label>
          </div>

          <div class="floating-label-group">
            <input type="text" id="EmailGuest" class="form-control" value={shopContact} autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setShopContact(event.target.value)} />
            <label class="floating-label" >ShopContact...</label>
          </div>

          <div >Address:</div>
          <textarea name="adrs" value={Address} cols="21" rows="2" className='enterarea' style={{ backgroundColor: "#ccc" }} onChange={(event) => setaddress(event.target.value)}></textarea>

          <div>Password:</div>
          <input type="password" value={Password} name="pswrd" className='enterarea' style={{ backgroundColor: "#ccc" }} onChange={(event) => setPassword(event.target.value)} />

          <div>Proof:</div>
          <input type="file" onChange={(event) => setProof(event.target.files[0])} />
          <div > Photo:</div>
          <input type="file"  onChange={(event) => setPhoto(event.target.files[0])} />

          <div >
            District:
          </div>
          <div>
            <select name="District" id="slct-District" onChange={(event) => {
              setDistrict(event.target.value);
              getDistrictwithPlace(event.target.value)
            }}>
              <option value="">---Select District---</option>
              {showDistrict.map((districts, key) => (
                <option value={districts._id}>{districts.districtName}</option>
              ))}


            </select>
          </div>

          <div>
            Place:</div>
          <div>
            <select name="Place" id="slct-Place" onChange={(event) => setPlace(event.target.value)}>
            <option>---Select Place---</option>

              {
                showPlace.map((places,key) => (
                  <option value={places._id}>{places.place}</option>

                ))
              }
            </select>

          </div>
          <div className='buttongroup'>
            <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px", backgroundColor: "#ccc" }} onClick={insertShopData}>Submit</button>
            <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px", backgroundColor: "#ccc" }} >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop