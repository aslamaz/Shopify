import React from 'react'

const Shop = () => {
  return (
    <div className='shopmaindiv'>
      <div className='ShopContainer'>
        <div style={{
          marginBottom: "30px"
        }}><h2>SHOPPING PAGE</h2></div>

        <div className='inputboxdiv'>

        <div class="floating-label-group">
          <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{backgroundColor:"#ccc"}}/>
          <label class="floating-label">FirstName...</label>
        </div>

           <div class="floating-label-group">
          <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{backgroundColor:"#ccc"}}/>
          <label class="floating-label">LastName...</label>
        </div>

           <div class="floating-label-group">
          <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{backgroundColor:"#ccc"}}/>
          <label class="floating-label" >Email...</label>
        </div>

          <div >Address:</div>
          <textarea name="adrs" cols="21" rows="2" className='enterarea' style={{backgroundColor:"#ccc"}}></textarea>

          <div>Contact:</div>
          <input type="text" name="cntct" className='enterarea' style={{backgroundColor:"#ccc"}}/>

          <div>Proof:</div>
          <button  className='enterarea'>Browse</button>

          <div >
            Photo:</div>
          <button  className='enterarea'>Browse</button>

          <div >
            District:
          </div>
          <div>
            <select name="District" id="slct-District">
              <option value="">---select---</option>
              <option value="">Ernakulam</option>
              <option value="">kottayam</option>
              <option value="">Idukki</option>
              <option value="">Trissur  </option>
              <option value="">Alppuzha  </option>
              <option value="">kannur  </option>
            </select>
          </div>

          <div>
            Place:</div>
          <div>
            <select name="Place" id="slct-Place">
              <option value="">---select---</option>
              <option value="">Muvattupuzha</option>
              <option value="">Kothamangalam</option>
              <option value="">Mannur</option>
              <option value="">Perumbavoor  </option>
              <option value="">angamaly  </option>
              <option value="">aluva  </option>
            </select>
          </div>
          <div className='buttongroup'>
            <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px",backgroundColor:"#ccc"}} >Submit</button>
            <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px",backgroundColor:"#ccc"}}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop