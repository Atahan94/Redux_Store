import React from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity, removeItem } from "../store/actions/cartAction";


const Cart = () => {
  const {totalCost, totalProducts, items} = useSelector(state => state.cart)
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">
      {console.log("itemler",items)}
       {items && items.map(item =>  <CartItem {...item} key={item.code} onQuantityChange={qty => qty === 0 ? dispatch(removeItem(item.code)): dispatch(setQuantity(item.code,qty))} onItemRemove={() => dispatch(removeItem(item.code))}/>)}
      </div>
      <CartTotals totalProducts={totalProducts} totalCost={totalCost} />
    </div>
  );
};

export default Cart;
