import React from "react";
import Categories from "./components/categories/Categories";
import Sort from "./components/Sort/Sort";
import Header from "./components/header/Header";
import "./scss/app.scss";
import PizzaBlock from "./components/pizza-block/PizzaBlock";

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
