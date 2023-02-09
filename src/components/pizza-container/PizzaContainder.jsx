import React, { useEffect, useState } from "react";
import { getPizzas } from "../../utils/api/api";
import PizzaBlock from "../pizza-block/PizzaBlock";

const PizzaContainder = () => {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    if (!pizzas) {
      getPizzas()
        .then((arr) => setPizzas(arr))
        .catch((err) =>
          console.log(`Не удалось загрузить список пицц ${err}`)
        );
    }
  }, []);

  return (
    <ul className="pizzas-container">
      {pizzas &&
        pizzas.map((pizza) => <PizzaBlock pizza={pizza} key={pizza.id} />)}
    </ul>
  );
};

export default PizzaContainder;
