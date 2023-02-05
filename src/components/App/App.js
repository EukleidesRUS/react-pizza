import React from "react";
import Categories from "../categories/Categories";
import Sort from "../Sort/Sort";
import Header from "../header/Header";
import "../../scss/app.scss";
import PizzaBlock from "../pizza-block/PizzaBlock";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <PizzaBlock />
          <div className="content__items"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
