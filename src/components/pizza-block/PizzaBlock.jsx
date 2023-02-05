import React from "react";
import { useState } from "react";
import { PlusIcon } from "../Icons/Plus";

const PizzaBlock = ({ pizza }) => {
  const [pizzaCount, setPizzaCount] = useState(0);
  const [activeType, setActiveType] = useState(pizza.types[0]);
  const [sizeState, setSizeState] = useState(26);
  const typeNames = ["тонкое", "традиционное"];

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
            {pizza.types.map((typeId) => (
              <li
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
                key={typeId}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {pizza.sizes.map((size) => (
              <li
                onClick={() => setSizeState(size)}
                className={sizeState === size ? "active" : ""}
                key={size}
              >
                {size} см.
              </li>
            ))}
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
