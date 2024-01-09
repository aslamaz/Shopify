import React from 'react'
import './ShopStyle.css'

const AddProduct = () => {
  return (
    <div className='addproduct'>
      <div className='fullcontainer'>
      <div style={{
          marginBottom: "30px"
        }}><h2>SHOPPING PAGE</h2></div>
        <div className='tagname'>
        <div>Photo:</div>
       <button>Browse</button>

       <div> Name:</div>
        <input type='text' name='name'/>
    

    
        <div>Details:</div>
        
        <input type="text" name='dtls' />
   

       <div> Price:</div>
       
        <input type="text" name='dtls' />
        </div>

    <div className='butngroup'>
        <button className='btnSubmit'>Submit</button>
        <button className='btncancel'>Cancel</button>
    </div>
    </div>
</div>
  )
}

export default AddProduct