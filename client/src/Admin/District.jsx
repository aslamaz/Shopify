import React from 'react'

const District = () => {
  return (
    <div className='district'>

      <div className='containerdis'>
        <div style={{
          marginBottom: "30px"
        }}><h2>ADD DISTRICT</h2></div>


        <div class="floating-label-group">
          <input type="text" id="District" class="form-control" autocomplete="off" autofocus required />
          <label class="floating-label">District...</label>
        </div>

        <div className='btndis'>
          <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px",backgroundColor:"#ccc"}}>Submit</button>
        </div>

        <div className='tabledis'>
          <table>
            <tr>
              <th>SINO.</th>
              <th>District Name</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Ernakulam</td>
              <td><button>Delete</button></td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  )
}

export default District