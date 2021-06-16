import React, { FC } from "react";
//Components
import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//Styled
import { Wrapper } from "./CartItem.styled";

type Props = {
  item: CartItemType;
  addToCart: (clikedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};
const CartItem: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
