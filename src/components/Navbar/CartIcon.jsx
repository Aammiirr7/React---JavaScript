import React from "react";

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <a href="/cart">
        <img src="/assets/cart-icon.png" alt="Cart" />
        <span className="cart-count">0</span>
      </a>
    </div>
  );
};

export default CartIcon;
