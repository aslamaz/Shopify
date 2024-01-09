import React from 'react'

const SubCategory = () => {
  return (
   <div className='SubCategory'>
    <div className='containerSubCat'>
    <div style={{
         marginBottom:"30px"
        }}><h2>ADD SUBCATEGORY</h2></div>

    <div className='inputdivSubCategory'>
    <div style={{fontSize:"20px"}}>
      Category:
    </div>
    <div >
    <select name="SubCategory" id="selectCategory">
    <option value="">---select---</option>
    <option value="">4</option>
    <option value="">3</option>
    <option value="">2</option>
    <option value="">heavy  </option>
  </select>
  </div>
      <div style={{padding:"5px"}}>
        <div style={{fontSize:"20px"}}>
       SubCategory:
        </div>
      <input type='text' name='cate' placeholder='Subcategory' className='inputsubcategory'/>
      </div>
      </div>
      
      
      <div className='btndis'>
        <button>Submit</button>
      </div>
     <div className='tabledis'>
     <table>
<tr>
  <th>SINO.</th>
  <th> Category</th>
  <th>Subcategory</th>
  <th>Action</th>
</tr>
<tr>
  <td>1</td>
  <td>truck</td>
  <td>Heavy</td>
  <td><button>Delete</button></td>
</tr>
</table>
     </div>
     </div>
  </div>
  )
}

export default SubCategory