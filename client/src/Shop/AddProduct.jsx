import React from 'react'
import './ShopStyle.css'

const AddProduct = () => {
  return (
    <div className='addproduct'>
      <div className='fullcontainer'>
        <div style={{
          marginBottom: "30px"
        }}><h2>ADD PRODUCT  </h2></div>
        <div className='tagname'>
          <div >Photo:</div>
          <button className='enterarea'>Browse</button>

          <div class="floating-label-group">
            <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} />
            <label class="floating-label">Name...</label>
          </div>



          <div class="floating-label-group">
            <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} />
            <label class="floating-label">product-Details...</label>
          </div>


          <div class="floating-label-group">
            <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} />
            <label class="floating-label">Price...</label>
          </div>
        </div>

        <div className='butngroup'>
          <button className='addPrdctbtnSubmit'>Submit</button>
          <button className='addPrdctbtncancel'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct