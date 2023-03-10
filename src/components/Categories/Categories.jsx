import { useState } from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? "active" : ""}
              key={value}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
