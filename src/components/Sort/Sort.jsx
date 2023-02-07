import React, { useState } from "react";
import ArrowSort from "../Icons/arrow-sort/ArrowSort";

const Sort = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировка по:</b>
        <ArrowSort isOpen={!openPopup}/>
        <span onClick={() => setOpenPopup(!openPopup)}>популярности</span>
      </div>
      {openPopup && (
        <div className="sort__popup">
          <ul>
            <li className="active">популярности</li>
            <li>цене</li>
            <li>алфавиту</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
