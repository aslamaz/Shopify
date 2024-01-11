const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { connect, Schema, model } = require("mongoose");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

const db = "mongodb+srv://muhammedazeez473:IUZmfC5BvwcRW5oe@cluster0.wconiyx.mongodb.net/db_Shopify";

app.listen(port, async () =>{
    console.log("Server is Running")
    try {
        await connect(db)
        console.log("DB Connection Established");
    } catch (err) {
        console.error(err.message);
        process.exit(1)
        
    }
});
//shema.....
//AdminShema........
const collectionAdminSchema = new Schema({
    adminName:{
        type:String,
        require:true,
    },
    adminEmail:{
        type:String,
        require:true,
    },
    adminPassword:{
        type:String,
        require:true,
    }
})
const modelAdmin = model("tblAdmin",collectionAdminSchema);

//Create Admin.......
app.post('/Admin', async (req,res)=>{
    try {
        const {adminName,adminEmail,adminPassword}=req.body
        const newAdmin = new modelAdmin({
            adminName,
            adminEmail,
            adminPassword
        })
        await newAdmin.save();
        res.json(newAdmin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Get Admin.....
app.get("/GetAdmin", async (req,res)=>{
    try {
        const Admins = await modelAdmin.find();
        res.json(Admins);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Upadte Admin......
app.put("/UpadteAdmin/:id",async (req,res)=>{
    const id = req.params.id
    try {
         const {adminName,adminEmail,adminPassword}=req.body;

        const UpadteAdmin = await modelAdmin.findByIdAndUpdate(
            id,
            {adminName,adminEmail,adminPassword},
             {new:true}
        );
        res.json(UpadteAdmin);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Admin.....
app.delete("/deleteAdmin/:id",async(req,res)=>{
    const id = req.params.id
    try {
        await modelAdmin.findByIdAndDelete(id);
        res.json("admin removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//DistrictShema......
const collectionDistrictShema = new Schema({
    districtName:{
        type:String,
        require:true,
    }
})
const modelDistrict = model("tblDistrict",collectionDistrictShema);

//Create district........
app.post("/district",async(req,res)=>{
    try {
        const{districtName}=req.body;
        const newDistricts = new modelDistrict({
            districtName
        });

        await newDistricts.save();
        res.json(newDistricts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
        
    }
});

//GET dISTRICT.......
app.get("/GetDistrict",async(req,res)=>{
    try {
        const getDistricts = await modelDistrict.find();
        res.json(getDistricts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//upadte District.......
app.put("/upadteDistrict/:id",async(req,res)=>{
    const id =req.params.id
    try {
        const {districtName}=req.body;
        const upadteDistrict = await modelDistrict.findByIdAndUpdate(
            id,
            {districtName},{new:true}
        )
        res.json(upadteDistrict);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error")
    }
});

//Delete District.......
app.delete("/deleteDistrict/:id",async(req,res)=>{
    const id = req.params.id
    try {
        await modelDistrict.findByIdAndDelete(id);
        res.json("District Removed")
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error")
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Placeshema.......
const collectionPlaceShema = new Schema({
    place:{
        type:String,
        require:true,
    },
    districtId:{
        type:Schema.Types.ObjectId,
        ref:"tblDistrict",
        require:true
        
    }
})
const modelPlaces = model("tblPlaces",collectionPlaceShema);

//Create Place................
app.post("/Place",async(req,res)=>{
    try {
        const {place,districtId}=req.body;
        const newPlaces = new modelPlaces({
            place,districtId
        });
        await newPlaces.save();
        res.json(newPlaces);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error")
    }
});

//Get Places...............
app.get("/getPlaces",async(req,res)=>{
    try {
       const getPlaces = await modelPlaces.find();
        res.json(getPlaces);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Get Places with district id...............
app.get("/placeWithDistrict",async(req,res)=>{
    try {
        const Places = await modelPlaces.find().populate("districtId");
        const filteredPlaces = Places.filter(
            (Place) => Place.districtId
        );
        res.json(filteredPlaces);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Get  district based places...............
app.get("/placeWithDistrict/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const place = await modelPlaces.find({districtId:id});
        if(place.length === 0){
        return res.status(404).json({msg:"no place found"});
        }
        res.json(place).status(200);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});




//Update Places.............
app.put("/updatePlace/:id",async(req,res)=>{
 const id = req.params.id
 try {
    const {place,districtId}=req.body;
     const updatePlaces = await modelPlaces.findByIdAndUpdate(
        id,
        {place,districtId},
        {new:true}
     );
     res.json(updatePlaces);
 } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
 }
});

//Delete Places...............
app.delete("/deletePlace/:id",async(req,res)=>{
    const id = req.params.id
    try {
        await modelPlaces.findByIdAndDelete(id);
        res.json("place removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//CategoryShema.....
const colletionCategoryShema = new Schema({
    category:{
        type:String,
        require:true,
    }
})
const modelCategory = model("tblCategory",colletionCategoryShema);

//Create category...............
app.post("/shopCategory",async(req,res)=>{
    try {
        const {category}=req.body;
        const newCategory = new modelCategory({
            category,
        });
        await newCategory.save();
        res.json(newCategory);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Category..............
app.get("/getCategory",async(req,res)=>{
    try {
        const getCategory = await modelCategory.find();
        res.json(getCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Category...................
app.put("/updateCategory/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {category}=req.body;
        const updateCategory = await modelCategory.findByIdAndUpdate(
            id,
            {category},{new:true}
        );
        res.json(updateCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Category.................
app.delete("/deleteCategory/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelCategory.findByIdAndDelete(id);
      res.json("Category Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//SubCategoryShema......
const collectionSubCategory = new Schema({
    subCategoryName:{
        type:String,
        require:true,
    },
    categoryId:{
        type:String,
        require:true,
    }
})
const modelSubCategory = model("tblSubCategory",collectionSubCategory);

//Create subCategory................
app.post("/subCategory",async(req,res)=>{
    try {
        const {subCategoryName,categoryId}=req.body;
        const newsubCategory = new modelSubCategory({
            subCategoryName,categoryId
        });
        await newsubCategory.save();
        res.json(newsubCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error")
    }
});

//Get subCategory...............
app.get("/getSubCategory",async(req,res)=>{
    try {
       const getsubCategory = await modelSubCategory.find();
        res.json(getsubCategory);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Update subCategory.............
app.put("/updateSubCategory/:id",async(req,res)=>{
 const id = req.params.id
 try {
    const {subCategoryName,categoryId}=req.body;
     const updateSubCategory = await modelSubCategory.findByIdAndUpdate(
        id,
        {subCategoryName,categoryId},
        {new:true}
     );
     res.json(updateSubCategory);
 } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
 }
});

//Delete subCategory...............
app.delete("/deleteSubCategory/:id",async(req,res)=>{
    const id = req.params.id
    try {
        await modelSubCategory.findByIdAndDelete(id);
        res.json("subCategory removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//..............................................................................................................//
//..............................................................................................................//


//Shop shema......
const collectionShopShema = new Schema({
    shopName:{
        type: String,
        require:true,
    },
    shopEmail:{
         type: String,
        require:true,
    },
    ShopContact:{
         type: Number,
        require:true,
    },
    shopAddress:{
         type: String,
        require:true,
    },
    placeId:{
         type: String,
        require:true,
    },
    ShopPhoto:{
         type: String,
        require:true,
    },
    shopProof:{
         type: String,
        require:true,
    },
    shopPassword:{
         type: String,
        require:true,
    },
    shopVStatus:{
         type: String,
        require:true,
    },
})
const modelShop = model("tblShop",collectionShopShema);

//Create Shop...............
app.post("/Shop",async(req,res)=>{
    try {
        const {shopName,shopEmail,ShopContact,shopAddress,placeId,ShopPhoto,shopProof,shopPassword,shopVStatus}=req.body;
        const newShop = new modelShop({
            shopName,shopEmail,ShopContact,shopAddress,placeId,ShopPhoto,shopProof,shopPassword,shopVStatus
        });
        await newShop.save();
        res.json(newShop);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Shop..............
app.get("/getShop",async(req,res)=>{
    try {
        const getShop = await modelShop.find();
        res.json(getShop);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Shop...................
app.put("/updateShop/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {shopName,shopEmail,ShopContact,shopAddress,placeId,ShopPhoto,shopProof,shopPassword,shopVStatus}=req.body;
        const updateShop = await modelShop.findByIdAndUpdate(
            id,
            {shopName,shopEmail,ShopContact,shopAddress,placeId,ShopPhoto,shopProof,shopPassword,shopVStatus},{new:true}
        );
        res.json(updateShop);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Shop.................
app.delete("/deleteShop/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelShop.findByIdAndDelete(id);
      res.json("Shop Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Customer Shema.....
const collectionCustomerShema = new Schema({
    customerName:{
         type: String,
        require:true,
    },
    customerEmail:{
         type: String,
        require:true,
    },
    customerContact:{
         type: String,
        require:true,
    },
    customerAddress:{
         type: String,
        require:true,
    },
    placeId:{
         type: String,
        require:true,
    },
    customerPhoto:{
         type: String,
        require:true,
    },
    customerPassword:{
         type: String,
        require:true,
    }
})
const modelCustomer = model("tblCustomer",collectionCustomerShema);

//Create Customer...............
app.post("/Customer",async(req,res)=>{
    try {
        const {customerName,customerEmail,customerContact,customerAddress,placeId,customerPhoto,customerPassword}=req.body;
        const newCustomer = new modelCustomer({
            customerName,customerEmail,customerContact,customerAddress,placeId,customerPhoto,customerPassword
        });
        await newCustomer.save();
        res.json(newCustomer);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Customer..............
app.get("/getCustomer",async(req,res)=>{
    try {
        const getCustomer = await modelCustomer.find();
        res.json(getCustomer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Customer...................
app.put("/updateCustomer/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {customerName,customerEmail,customerContact,customerAddress,placeId,customerPhoto,customerPassword}=req.body;
        const updateCustomer = await modelCustomer.findByIdAndUpdate(
            id,
            {customerName,customerEmail,customerContact,customerAddress,placeId,customerPhoto,customerPassword},{new:true}
        );
        res.json(updateCustomer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Customer.................
app.delete("/deleteCustomer/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelCustomer.findByIdAndDelete(id);
      res.json("Customer Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Product Shema....
const collectionProductshema = new Schema({
    productName:{
         type: String,
        require:true,
    },
    ProductDescription:{
         type: String,
        require:true,
    },
    productRate:{
         type: String,
        require:true,
    },
    productPhoto:{
         type: String,
        require:true,
    },
    subCategoryId:{
         type: String,
        require:true,
    },
    shopId:{
         type: String,
        require:true,
    }
})
const modelProduct = model("tblProduct",collectionProductshema);

//Create product...............
app.post("/Product",async(req,res)=>{
    try {
        const {productName,ProductDescription,productRate,productPhoto,subCategoryId,shopId}=req.body;
        const newProduct = new modelProduct({
            productName,ProductDescription,productRate,productPhoto,subCategoryId,shopId,
        });
        await newProduct.save();
        res.json(newProduct);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get product..............
app.get("/getProduct",async(req,res)=>{
    try {
        const getProduct = await modelProduct.find();
        res.json(getProduct);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update product...................
app.put("/updateProduct/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {productName,ProductDescription,productRate,productPhoto,subCategoryId,shopId}=req.body;
        const updateProduct = await modelProduct.findByIdAndUpdate(
            id,
            {productName,ProductDescription,productRate,productPhoto,subCategoryId,shopId},{new:true}
        );
        res.json(updateProduct);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Product.................
app.delete("/deleteProduct/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelProduct.findByIdAndDelete(id);
      res.json("Product Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Gallery Shema.....
const collectionGalleryShema = new Schema({
    galleryImage:{
         type: String,
        require:true,
    },
    galleryCaption:{
         type: String,
        require:true,
    },
    productId:{
         type: String,
        require:true,
    }
})
const modelGallery = model("tblGallery",collectionGalleryShema);

//Create Gallery...............
app.post("/Gallery",async(req,res)=>{
    try {
        const {galleryImage,galleryCaption,productId}=req.body;
        const newGallery = new modelGallery({
            galleryImage,galleryCaption,productId
        });
        await newGallery.save();
        res.json(newGallery);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Galley..............
app.get("/getGallery",async(req,res)=>{
    try {
        const getGallery = await modelGallery.find();
        res.json(getGallery);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Gallery...................
app.put("/updateGallery/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {galleryImage,galleryCaption,productId}=req.body;
        const updateGallery = await modelGallery.findByIdAndUpdate(
            id,
            {galleryImage,galleryCaption,productId},{new:true}
        );
        res.json(updateGallery);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Gallery.................
app.delete("/deleteGallery/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelGallery.findByIdAndDelete(id);
      res.json("Category Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//booking Shema....
const collectionBookingShema = new Schema({
    bookingDate:{
         type: String,
        require:true,
    },
    bookingTotalAmount:{
         type: String,
        require:true,
    },
    bookingStatus:{
         type: String,
        require:true,
    },
    paymentStatus:{
         type: String,
        require:true,
    },
    customerId:{
         type: String,
        require:true,
    }
})
const modelBooking = model("tblBooking",collectionBookingShema);

//Create Booking...............
app.post("/Booking",async(req,res)=>{
    try {
        const {bookingDate,bookingTotalAmount,bookingStatus,paymentStatus,customerId}=req.body;
        const newBooking = new modelBooking({
            bookingDate,bookingTotalAmount,bookingStatus,paymentStatus,customerId
        });
        await newBooking.save();
        res.json(newBooking);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Booking..............
app.get("/getBooking",async(req,res)=>{
    try {
        const getBooking = await modelBooking.find();
        res.json(getBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Booking...................
app.put("/updateBooking/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {bookingDate,bookingTotalAmount,bookingStatus,paymentStatus,customerId}=req.body;
        const updateBooking = await modelBooking.findByIdAndUpdate(
            id,
            {bookingDate,bookingTotalAmount,bookingStatus,paymentStatus,customerId},{new:true}
        );
        res.json(updateBooking);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Booking.................
app.delete("/deleteBooking/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelBooking.findByIdAndDelete(id);
      res.json("Booking Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Cart Shema....
const collectionCartShema = new Schema({
    cartQuantity:{
         type: String,
        require:true,
    },
    bookingId:{
         type: String,
        require:true,
    },
    productId:{
         type: String,
        require:true,
    },
    cartStatus:{
         type: String,
        require:true,
    }
})
const modelCart = model("tblCart",collectionCartShema);

//Create Cart...............
app.post("/Cart",async(req,res)=>{
    try {
        const {cartQuantity,bookingId,productId,cartStatus}=req.body;
        const newCart = new modelCart({
            cartQuantity,bookingId,productId,cartStatus
        });
        await newCart.save();
        res.json(newCart);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Cart..............
app.get("/getCart",async(req,res)=>{
    try {
        const getCart = await modelCart.find();
        res.json(getCart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Cart...................
app.put("/updateCart/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {cartQuantity,bookingId,productId,cartStatus}=req.body;
        const updateCart = await modelCart.findByIdAndUpdate(
            id,
            {cartQuantity,bookingId,productId,cartStatus},{new:true}
        );
        res.json(updateCart);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Cart.................
app.delete("/deleteCart/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelCart.findByIdAndDelete(id);
      res.json("cart Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Review Shema....
const collectionReviewShema = new Schema({
    reviewRating:{
         type: String,
        require:true,
    },
    reviewContent:{
         type: String,
        require:true,
    },
    customerId:{
         type: String,
        require:true,
    },
    shopId:{
         type: String,
        require:true,
    },
    reviewDateTime:{
         type: String,
        require:true,
    },
    customerName:{
         type: String,
        require:true,
    }
})
const modelReview = model("tblReview",collectionReviewShema);

//Create Review...............
app.post("/Review",async(req,res)=>{
    try {
        const {reviewRating,reviewContent,customerId,shopId,reviewDateTime,customerName}=req.body;
        const newCart = new modelReview({
            reviewRating,reviewContent,customerId,shopId,reviewDateTime,customerName
        });
        await newReview.save();
        res.json(newReview);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get review..............
app.get("/getReview",async(req,res)=>{
    try {
        const getReview = await modelReview.find();
        res.json(getReview);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update review...................
app.put("/updateReview/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {reviewRating,reviewContent,customerId,shopId,reviewDateTime,customerName}=req.body;
        const updateReview = await modelReview.findByIdAndUpdate(
            id,
            {reviewRating,reviewContent,customerId,shopId,reviewDateTime,customerName},{new:true}
        );
        res.json(updateReview);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Cart.................
app.delete("/deleteReview/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelReview.findByIdAndDelete(id);
      res.json("cart Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//Complaint Shemaa.....
const collectionComplaintShema = new Schema({
    complaintTitle:{
         type: String,
        require:true,
    },
    complaintContent:{
         type: String,
        require:true,
    },
    complaintDate:{
         type: String,
        require:true,
    },
    complaintStatus:{
         type: String,
        require:true,
    },
    complaintReplay:{
         type: String,
        require:true,
    },
    customerId:{
         type: String,
        require:true,
    }
})
const modelComplaint = model("tblComplaint",collectionComplaintShema);

//Create Complaint...............
app.post("/Complaint",async(req,res)=>{
    try {
        const {complaintTitle,complaintContent,complaintDate,complaintStatus,complaintReplay,customerId}=req.body;
        const newComplaint = new modelComplaint({
            complaintTitle,complaintContent,complaintDate,complaintStatus,complaintReplay,customerId
        });
        await newReview.save();
        res.json(newComplaint);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Complaint..............
app.get("/getComplaint",async(req,res)=>{
    try {
        const getComplaint = await modelComplaint.find();
        res.json(getComplaint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Complaint...................
app.put("/updateComplaint/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {complaintTitle,complaintContent,complaintDate,complaintStatus,complaintReplay,customerId}=req.body;
        const updateComplaint = await modelComplaint.findByIdAndUpdate(
            id,
            {complaintTitle,complaintContent,complaintDate,complaintStatus,complaintReplay,customerId},{new:true}
        );
        res.json(updateComplaint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Complaint.................
app.delete("/deleteComplaint/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelComplaint.findByIdAndDelete(id);
      res.json("Complaint Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//



//FeedBack Shema....
const collectionFeedbackShema = new Schema({
    feedbackContent:{
         type: String,
        require:true,
    },
    feedbackDate:{
         type: String,
        require:true,
    },
    customerId:{
         type: String,
        require:true,
    }
})
const modelFeedback = model("tblFeedback",collectionFeedbackShema);

//Create Feedback...............
app.post("/Feedback",async(req,res)=>{
    try {
        const {feedbackContent,feedbackDate,customerId}=req.body;
        const newFeedback = new modelFeedback({
            feedbackContent,feedbackDate,customerId
        });
        await newFeedback.save();
        res.json(newFeedback);
           

    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//Get Complaint..............
app.get("/getComplaint",async(req,res)=>{
    try {
        const getComplaint = await modelComplaint.find();
        res.json(getComplaint);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server eror");
    }
});

//Update Feedback...................
app.put("/updateFeedback/:id",async(req,res)=>{
    const id = req.params.id;
    try {
        const {feedbackContent,feedbackDate,customerId}=req.body;
        const updateFeedback = await modelFeedback.findByIdAndUpdate(
            id,
            {feedbackContent,feedbackDate,customerId},{new:true}
        );
        res.json(updateFeedback);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server Error");
    }
});

//Delete Feedback.................
app.delete("/deleteFeedback/:id",async(req,res)=>{
    const id = req.params.id;
    try {
      await modelFeedback.findByIdAndDelete(id);
      res.json("Feedback Removed");
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

//..............................................................................................................//
//..............................................................................................................//