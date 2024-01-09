import React from 'react'

const Place = () => {
  return (
    <div className='place'>
    <div className='containerplace'>
    <div style={{
         marginBottom:"30px"
        }}><h2>ADD PLACE</h2></div>
      <div className='palceinputboxs'>
    <div >
      District:
    </div>
    <div >
    <select name="District" id="selectdistrict">
    <option value="volvo">---select---</option>
    <option value="volvo">Ernakulam</option>
    <option value="saab">Trissur</option>
    <option value="opel">Kottayam</option>
    <option value="audi">alappuzha  </option>
  </select>
  </div>
      <div >
        <div style={{fontSize:"20px"}}>
        Place:
        </div>
      <input type='text' name='Place' placeholder='Place...' className='inputplace'/>
      </div>
      </div>

      <div className='btndis'>
        <button>Submit</button>
      </div>

     <div className='tabledis'>
     <table>
<tr>
  <th>SINO.</th>
  <th> District</th>
  <th>Place</th>
  <th>Action</th>
</tr>
<tr>
  <td>1</td>
  <td>Ernakulam</td>
  <td>Muvattupuzha</td>
  <td><button>Delete</button></td>
</tr>
</table>
     </div>
     </div>
  </div>
  )
}

export default Place