import React from "react";
import "../App.css";
const Products = ({
  image,
  price,
  compare_at_price,
  title,
  vendor,
  badge_text,
}) => {
  const discount = Math.round(
    ((compare_at_price - price) / compare_at_price) * 100
  );

  return (
    <div className="productCard">
      <img src={image} alt={title} className="productImage" />
     
      <div className="productDetails">
        <div className="product-info">
          <h3 className="title-truncate">{title}</h3>
          <span className="vendor">{vendor}</span>
        </div>
        <div
          style={{
            display: "flex",
            gap:'10px',
            fontSize: "13px",
            marginLeft:'40px'
          }}
        >
          <p>RS:{price}</p>
          <p className="real-price">{compare_at_price}</p>
          <p className="discount">{discount}% off</p>
        </div>

        <button className="addToCart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Products;
