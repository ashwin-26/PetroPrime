import React, { useState } from "react";


const ProductForm = () => {

    const [name, setName] = useState('')
    const [details,setDetails] = useState('')
    const [stock,setStock] = useState('')
    const [price,setPrice] = useState('')

   

    const handleProduct = async () => {

      try{
        let para = {
          "productName":name,
          "productDetails":details,
          "stock":stock,
          "price":price
        }

      //   const response = await fetch('http://localhost:5117/api/Product/AddProduct', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(para),
      // });
      // const responseBody = await response.json();
      

      if (true) {
        // console.log("Signup suc\\\cessful");
        
        alert("Product successfully Added")
      } else {
        // Handle signup error, display an error message
      }

      }catch(error){
        console.error('Error While Adding Product', error);
      }
        
    }


    return(
      <>
      
      
        <div className="SupplierContainer">
            <h2>Product Details</h2>
            <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="inputName" placeholder="First Name"/>
                </div>
                <div class="form-group">
                  <label for="details">Details</label>
                  <input type="text" class="form-control" id="inputDetails" placeholder="Enter Product Details"/>
                </div>
                <div class="form-group">
                  <label for="stock">Stock</label>
                  <input type="text" class="form-control" id="inputStock" placeholder="Enter Stock"/>
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input type="text" class="form-control" id="inputPrice" placeholder="Enter price of item"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={handleProduct}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default ProductForm;