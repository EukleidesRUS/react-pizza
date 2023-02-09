import React, { useEffect, useState } from "react";
import { getPizzas } from "../../utils/api/api";
import PizzaBlockSceleton from "../pizza-block/pizza-block-skeleton/PizzaBlockSceleton";
import PizzaBlock from "../pizza-block/PizzaBlock";

const PizzaContainder = () => {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    if (!pizzas) {
      getPizzas()
        .then((arr) => setPizzas(arr))
        .catch((err) => console.log(`Не удалось загрузить список пицц ${err}`));
    }
  }, []);

  return (
    <ul className="pizzas-container">
      {pizzas
        ? pizzas.map((pizza) => <PizzaBlock pizza={pizza} key={pizza.id} />)
        : [...new Array(8)].map((_, index) => <PizzaBlockSceleton key={index}/>)}
    </ul>
  );
};

export default PizzaContainder;
