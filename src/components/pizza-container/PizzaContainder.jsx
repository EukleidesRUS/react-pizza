import React from "react";
import PizzaBlock from "../pizza-block/PizzaBlock";

const PizzaContainder = ({ pizzasObj }) => {
  const { pizzas } = pizzasObj;

  return (
    <ul className="pizzas-container">
      {pizzas.map((pizza) => (
        <PizzaBlock pizza={pizza} key={pizza.id}/>
      ))}
    </ul>
  );
};

export default PizzaContainder;
