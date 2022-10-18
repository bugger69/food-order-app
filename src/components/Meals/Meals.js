import React from "react";

import MealsSummary from "./MealSummary";
import AvailableMeals from "./AvailableMeals";

import './Meals.css';

const Meals = (props) => {
    return <React.Fragment>
        <MealsSummary/>
        <AvailableMeals className="all_meals" meals={props.meals}/>
    </React.Fragment>
}

export default Meals;