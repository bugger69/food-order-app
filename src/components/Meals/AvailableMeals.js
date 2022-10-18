import React from "react";

import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const AvailableMeals = (props) => {
  return (
    <section className={classes.meals}>
      {props.meals.map((mealItem) => {
        return (
          <MealItem name={mealItem.name} description={mealItem.description} price={mealItem.price} />
        );
      })}
    </section>
  );
};

export default AvailableMeals;
