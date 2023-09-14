import React from "react";

const SupplierForm = () => {

    const handleProduct = () => {
        //
    }


    return(
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
    )
}

export default SupplierForm;