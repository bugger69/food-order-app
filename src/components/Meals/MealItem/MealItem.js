import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../store/cart-context';

import classes from './MealItem.module.css';

const MealItem = (props) => {
  const price = `$${props.price}`;

  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    };
    console.log(item);
    cartCtx.addItem(item);
  };

  return (
    <li>
      <div>
        <div>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div><MealItemForm onAddToCart={addToCartHandler}/></div>
    </li>
  );
};

export default MealItem;
