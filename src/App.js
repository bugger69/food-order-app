import React, { useState } from "react";

import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import Card from "./components/UI/Card/Card";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./components/store/CartProvider";

import "./App.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const cart = [];

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <CartProvider>
      {cartVisible && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Card className="main">
          <Meals meals={DUMMY_MEALS} />
        </Card>
      </main>
    </CartProvider>
  );
}

export default App;
