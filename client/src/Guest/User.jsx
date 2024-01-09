import React from 'react'

const User = () => {
  return (
    <div className='Guestdiv'>
       <div className='guestContainerdiv'>
       <div style={{
          marginBottom: "30px"
        }}><h2>USER PAGE</h2></div>

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
          <label class="floating-label">Email...</label>
        </div>
    
    <div>
    Password:</div>
    <input type="password"  name="psswrd" className='inputuser' style={{backgroundColor:"#ccc"}}/>
    
    <div>
    Address:</div>
    <textarea name="adrs"  cols="21" rows="2" className='inputuser' style={{backgroundColor:"#ccc"}}></textarea>
    </div>

    <div className='buttongroup'>
      <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px",backgroundColor:"#ccc"}} >Submit</button>
      <button style={{ width: "100px", height: "30px", border: "none", borderRadius: "5px",backgroundColor:"#ccc"}}>Cancel</button>
    </div>
  </div> 
    </div>
  )
}

export default User