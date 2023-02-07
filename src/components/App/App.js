import React from "react";
import Categories from "../categories/Categories";
import Sort from "../sort/Sort";
import Header from "../header/Header";
import "../../scss/app.scss";
import pizzasObj from "../../assets/pizzas.json";
import PizzaContainder from "../pizza-container/PizzaContainder";

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
          <PizzaContainder pizzasObj={pizzasObj}/>
          <div className="content__items"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
