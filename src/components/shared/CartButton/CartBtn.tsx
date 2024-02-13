import React from "react";
import "./cartBtn.css";
import { FaCartPlus } from "react-icons/fa";

const CartBtn = () => {
  return (
    <button className="fa-cart-btn">
      <FaCartPlus />
      افزودن به سبد خرید
    </button>
  );
};

export default CartBtn;
