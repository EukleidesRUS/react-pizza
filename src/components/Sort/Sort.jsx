import React from "react";
import ArrowSort from "../Icons/ArrowSort";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <ArrowSort />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
