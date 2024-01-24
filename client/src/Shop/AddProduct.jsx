import React, { useEffect, useState } from 'react'
import './ShopStyle.css'
import axios from 'axios'

const AddProduct = () => {
  const [prdctName, setPrdctName] = useState('');
  const [prdctDescription, setPrdctDescription] = useState('');
  const [prdctRate, setPrdctRate] = useState('');
  const [prdctPhoto, setPrdctPhoto] = useState('');
  const [showPrdct, setShowPrdct] = useState([]);
  const [category, setCategory] = useState('');
  const [showCategory, setShowCategory] = useState([]);
  const [subCategory, setSubCategory] = useState('');
  const [showSubCategory, setShowSubCategory] = useState([]);

  const insertPrdctDtails = () => {

    const frm = new FormData();
    frm.append("productName", prdctName);
    frm.append("ProductDescription", prdctDescription);
    frm.append("productRate", prdctRate);
    frm.append("productPhoto", prdctPhoto);
    frm.append("subCategoryId", subCategory);


    axios.post('http://localhost:5000/Product', frm).then((response) => {
      console.log(response.data);

    })
  }

  const fetchProduct = () => {
    axios.get('http://localhost:5000/subCategoryWithProduct').then((response) => {
      console.log(response.data);
      const data = response.data;
      setShowPrdct(data);

    })
  }

  const fetchCategory = () => {
    axios.get('http://localhost:5000/getCategory').then((response) => {
      console.log(response.data);
      const data = response.data;
      setShowCategory(data);
    })
  }

  const getCategoryWithSubCategory = (id) => {
    axios.get(`http://localhost:5000/categoryWithSubcategory/${id}`).then((response) => {
      console.log(response.data);
      const data = response.data;
      setShowSubCategory(data);
    })
  }

  useEffect(() => {
    fetchProduct();
    fetchCategory()
  }, [])


  return (
    <div className='addproduct'>
      <div className='fullcontainer'>
        <div style={{
          marginBottom: "30px"
        }}><h2>ADD PRODUCT  </h2></div>
        <div className='tagname'>

          <div className='cstmrslctCategory' >

            <select name="category" id="slct-category" onChange={(event) => {
              setCategory(event.target.value)
              getCategoryWithSubCategory(event.target.value)
            }}>
              <option value="">---Select Category---</option>

              {showCategory.map((Categories, key) => (
                <option value={Categories._id}>{Categories.category}</option>
              ))}
            </select>

          </div>


          <div className='cstmrslctSubCategory' >

            <select name="SubCategory" id="slct-SubCategory" onChange={(event) => {
              setSubCategory(event.target.value)
              
            }}>
              <option value="">---Select SubCategory---</option>

              {showSubCategory.map((subCategories, key) => (
                <option value={subCategories._id}>{subCategories.subCategoryName}</option>
              ))}
            </select>

          </div>

          <div class="floating-label-group">
            <input type="text" id="District" value={prdctName} class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setPrdctName(event.target.value)} />
            <label class="floating-label">Name...</label>
          </div>



          <div class="floating-label-group">
            <input type="text" id="District" value={prdctDescription} class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setPrdctDescription(event.target.value)} />
            <label class="floating-label">product-Details...</label>
          </div>


          <div class="floating-label-group">
            <input type="text" id="District" value={prdctRate} class="form-control" autocomplete="off" autofocus required style={{ backgroundColor: "#ccc" }} onChange={(event) => setPrdctRate(event.target.value)} />
            <label class="floating-label">Price...</label>
          </div>

          <div >Photo:</div>
          <input type="file" onChange={(event) => setPrdctPhoto(event.target.files[0])} />
        </div>

        <div className='butngroup'>
          <button className='addPrdctbtnSubmit' onClick={insertPrdctDtails}>Submit</button>
          <button className='addPrdctbtncancel'>Cancel</button>
        </div>

        <div className='tabledis' style={{ marginTop: "30px" }}>
          <table>
            <tr>
              <th>SINO.</th>
              <th> productName</th>
              <th>productDetails</th>

              <th>productRate</th>
              <th>productPhoto</th>
              

            </tr>

            {showPrdct.map((products, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{products.productName}</td>
                <td>{products.ProductDescription}</td>
                <td>{products.productRate}</td>
                <td><img src={products.prdctimgsrc}/></td>
                {/* <td><button className='districtDltBtn' onClick={() => deletePlace(places._id)}>Delete</button></td>
                <td><button className='districtUpdatebtn' onClick={() => updatePlace(places._id)}>Upadte</button></td> */}
              </tr>
            ))}

          </table>
        </div>


      </div>


    </div>
  )
}

export default AddProduct