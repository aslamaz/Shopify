import React from 'react'
import './ShopStyle.css'

const AddStock = () => {
  return (
    <div className='addstock'>

      <div className='StockContainer'>
        <h2>ADD STOCKS</h2>
        <div style={{border: "1px solid #ccc",padding:" 12px 20px"}}>
          <div class="floating-label-group">
            <input type="text" id="District" class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} />
            <label class="floating-label">Add-Stock...</label>
          </div>
        </div>
        <div className='btnStock'><button >Submit</button></div>


      </div>
    </div>
  )
}

export default AddStock