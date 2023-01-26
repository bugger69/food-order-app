import React, { useContext, useEffect, useState } from "react";

import CartIcon from "../../../Cart/CartIcon/CartIcon";
import CartContext from "../../../store/cart-context";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    let sum = 0;
    for (let item of cartCtx.items) {
      sum += +item.amount;
    }
    return sum;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if(items.length === 0) return;
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
