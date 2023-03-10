import React from "react";

import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      <ul>
        {props.meals.map((mealItem) => {
          return (
            <MealItem
              id={mealItem.id}
              name={mealItem.name}
              description={mealItem.description}
              price={mealItem.price}
              key={mealItem.id}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default AvailableMeals;
