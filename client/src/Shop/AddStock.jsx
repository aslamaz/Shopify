import React from 'react'
import './ShopStyle.css'

const AddStock = () => {
  return (
    <div className='addstock'>
        
        <div className='StockContainer'>
        <h2>ADD STOCKS</h2>
        <div className='txtarea'>
        <div >Add Stock: </div>
        <div><input type='text'/> </div>
        </div>
        <div className='btnStock'><button >Submit</button></div>
       

        </div>
    </div>
  )
}

export default AddStock