import React, { FC } from "react";
import Button from "@material-ui/core/Button";
//Types
import { CartItemType } from "../App";
//Styled
import { Wrapper } from "./Item.styled";

type Props = {
  item: CartItemType;
  handleAddCart: (clikedItem: CartItemType) => void;
};
const Item: FC<Props> = ({ item, handleAddCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button onClick={() => handleAddCart(item)}>Add Card</Button>
  </Wrapper>
);

export default Item;
