import React from "react";
import { useState } from "react";
import { PlusIcon } from "../Icons/Plus";

const PizzaBlock = ({ pizza }) => {
  const [pizzaCount, setPizzaCount] = useState(0);

  return (
    pizza && (
      <li className="pizza-block">
        <img
          className="pizza-block__image"
          src={pizza.imageUrl}
          alt={pizza.name}
        />
        <h4 className="pizza-block__title">{pizza.name}</h4>
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
          <div className="pizza-block__price">от {pizza.price} ₽</div>
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
    )
  );
};

export default PizzaBlock;
