import React from "react";
import { useState } from "react";
import pizzasObj from "../../assets/pizzas.json";
import { PlusIcon } from "../Icons/Plus";

const PizzaBlock = () => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const { pizzas } = pizzasObj;

  return (
    <ul className="pizzas-container">
      {pizzas.map((item) => {
        return (
          <li className="pizza-block" key={item.id}>
            <img
              className="pizza-block__image"
              src={item.imageUrl}
              alt={item.name}
            />
            <h4 className="pizza-block__title">{item.name}</h4>
            <div className="pizza-block__selector">
              <ul>
                <li className="active">тонкое</li>
                <li>традиционное</li>
              </ul>
              <ul>
                <li className="active">26 см.</li>
                <li>30 см.</li>
                <li>40 см.</li>
              </ul>
            </div>
            <div className="pizza-block__bottom">
              <div className="pizza-block__price">от {item.price} ₽</div>
              <button
                className="button button--outline button--add"
                onClick={() => setPizzaCount(pizzaCount + 1)}
              >
                <PlusIcon />
                <span>Добавить</span>
                <i>{pizzaCount}</i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default PizzaBlock;
