import React, { useState } from "react";
import ArrowSort from "../Icons/arrow-sort/ArrowSort";

const Sort = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortName, setSortName] = useState("популярности");
  const [openPopup, setOpenPopup] = useState(false);
  const list = ["популярности", "цене", "алфавиту"];

  const chooseFilterItem = (name, index) => {
    setActiveIndex(index);
    setSortName(name);
    setOpenPopup(!openPopup);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <ArrowSort isOpen={openPopup} />
        <span onClick={() => setOpenPopup(!openPopup)}>{sortName}</span>
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            {list.map((name, index) => {
              return (
                <li
                  onClick={() => chooseFilterItem(name, index)}
                  className={activeIndex === index ? "active" : ""}
                  key={name}
                >
                  {name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
