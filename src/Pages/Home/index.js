import React from "react";
import Card from "../../components/Card";
import "./style.css";

const Home = ({ foods, handleQuantity, handleAddToBag }) => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="cards-wrapper">
        {foods.map((card) => <Card card={card} handleQuantity={handleQuantity} handleAddToBag={handleAddToBag} />)}
      </div>
    </div>
  )
};

export default Home;
