import React from "react";
import CartItem from "../CartItem/CartItem";
//styled
import { Wrapper } from "./Cart.styled";
//Types
import { CartItemType } from "../App";
import { FC } from "react";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clikedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: FC<Props> = ({ cartItems, removeFromCart, addToCart }) => {
  const calculateTotal = (items: CartItemType[]) => {
    return items.reduce(
      (ack: number, item) => ack + item.amount * item.price,
      0
    );
  };
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;