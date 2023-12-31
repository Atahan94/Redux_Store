import React from "react";

const Product = ({ department, product, cost, onClickAddButton, item }) => {
  return (
    <div className="product">
      <div className="department-badge">{department.toUpperCase()}</div>
      <div className="product-title">{product}</div>
      <div className="product-cost">${cost}</div>
      <button className="addCartBtn" onClick={() => onClickAddButton(item)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
