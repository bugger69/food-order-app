import React from "react";

const Menu = (props) => {
  return (
    <React.Fragment>
      {props.meals.map((mealItem) => {
        return (
          <li key={mealItem.id}>
            <h2>{mealItem.name}</h2>
            <p>{mealItem.description}</p>
            <h5>$ {mealItem.price}</h5>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default Menu;
