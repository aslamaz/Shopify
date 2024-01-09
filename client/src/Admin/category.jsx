import React from 'react'

const Category = () => {
  return (
    <div><div className='category'>
      <div className='containercategory'>
        <div style={{
          marginBottom: "30px"
        }}><h2>ADD CATEGORY</h2></div>

        <div className='Categoryinputdiv'>
          <div style={{ fontSize: "20px" }}>
            Category:
          </div>
          <div >
            <input type='text' name='Category' placeholder='Category...' className='inputcategory' />
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
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Vehicles</td>
              <td><button>Delete</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category